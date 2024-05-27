const express=require('express');
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



// app.post('/api', (req, res) => {
//   const { name, speciality ,years_of_experience, hospital, location,  gender} = req.body;
  
//   // Insert data into MySQL
//   const query = 'INSERT INTO Doctors (name,  specialty ,years_of_experience, hospital, location,  gender) VALUES (?,?,?,?,?,?)';
//   con.query(query, [ name, speciality ,years_of_experience, hospital, location,  gender ], (error, results) => {
//     if (error) throw error;
//     console.log('Data inserted into MySQL');
//     res.send('Data inserted into MySQL');
//   });
// });



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






app.post('/login', (req, res) => {
  const {  email, password } = req.body;
  // Insert data into MySQL
  const query = 'select * from guests where email = ? AND password = ? ';

  con.query(query, [  email , password ], (error, results) => {
    if (error) {
      console.error("Error executing query:", error);
      res.status(500).json({ error: "Failed to fetch data" });
  } else {
      res.json(results);
  }
  });
});



module.exports = app;