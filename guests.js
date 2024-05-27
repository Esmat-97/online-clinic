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

    console.log(token);

    // Send response
    res.json({
      user: results[0],
      token
    });
  });
});





// app.post('/login', (req, res) => {
//   const {  email, password } = req.body;
//   // Insert data into MySQL
//   const query = 'select * from guests where email = ? AND password = ? ';

//   const payload = {
//     email : email
// };

// const token = jwt.sign(payload, secretKey, { expiresIn: '30m' });

// console.log(token);

//   con.query(query, [  email , password ], (error, results) => {
//     if (error) {
//       console.error("Error executing query:", error);
//       res.status(500).json({ error: "Failed to fetch data" });
//   } else {
//       res.json(results , token);
//   }
//   });

// });



module.exports = app;