const express=require('express');
const jwt = require('jsonwebtoken');
const mysql=require('mysql');
var bodyParser=require('body-parser');
const cors=require('cors');
const app=express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));


const con =  mysql.createConnection({
host:'localhost',
user:'root',
password:'',
database:'clinic'
});





app.post('/signin', (req, res) => {
  const { username, email, phone , password ,role ,  hospital , specialty , location } = req.body;
  // Insert data into MySQL
  const query = 'INSERT INTO guests (username , email, phone, password , role , hospital , specialty , location ) VALUES (?,?,?,?,?, ?,?,?)';
  con.query(query, [ username, email, phone, password , role , hospital , specialty , location  ], (error, results) => {
    if (error) throw error;
    console.log('Data inserted into MySQL');
    res.send('Data inserted into MySQL');
  });
});





/*    */

const secretKey = '111';

app.post('/login', (req, res) => {
  const { email, password } = req.body;

  // Validate input
  if (!email || !password) {
    return res.status(400).json({ error: 'Email and password are required' });
  }

  // Prepare SQL query
  const query = 'SELECT * FROM guests WHERE email = ? AND password = ?';

  con.query(query, [email, password], (error, results) => {
    if (error) {
      console.error("Error executing query:", error);
      return res.status(500).json({ error: "Failed to fetch data" });
    }

    if (results.length === 0) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }

    // Generate JWT token
    const payload = { email };
    const token = jwt.sign(payload, secretKey, { expiresIn: '30m' });


    // Send response
    res.json({
      user: results[0],
      token
    });
  });
});





/*    */


app.post('/logout', (req, res) => {
  const token = req.headers.authorization.split(' ')[1];

  if (!token) {
    return res.status(400).json({ error: 'Token is required' });
  }

  try {
    const decoded = jwt.verify(token, secretKey);
    tokenBlacklist.add(token); // Add token to the blacklist
    res.json({ message: 'Logout successful' });
  } catch (error) {
    res.status(401).json({ error: 'Invalid token' });
  }
});


app.use((req, res, next) => {
  const authHeader = req.headers.authorization;
  if (authHeader) {
    const token = authHeader.split(' ')[1];
    if (tokenBlacklist.has(token)) {
      return res.status(401).json({ error: 'Token is blacklisted' });
    }
  }
  next();
});



module.exports = app;