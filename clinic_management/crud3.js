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


app.get('/', (req, res) => {
  con.query("SELECT * FROM Doctors", (err, doctorsResult) => {
      if (err) {
          console.error("Error executing doctors query:", err);
          return res.status(500).json({ error: "Failed to fetch doctors data" });
      }

      con.query("SELECT * FROM sign", (err, signResult) => {
          if (err) {
              console.error("Error executing sign query:", err);
              return res.status(500).json({ error: "Failed to fetch sign data" });
          }

          res.json({ doctors: doctorsResult, signs: signResult });
      });
  });
});


    






app.post('/api', (req, res) => {
  const { name, speciality ,years_of_experience, hospital, location,  gender} = req.body;
  
  // Insert data into MySQL
  const query = 'INSERT INTO Doctors (name,  specialty ,years_of_experience, hospital, location,  gender) VALUES (?,?,?,?,?,?)';
  con.query(query, [ name, speciality ,years_of_experience, hospital, location,  gender ], (error, results) => {
    if (error) throw error;
    console.log('Data inserted into MySQL');
    res.send('Data inserted into MySQL');
  });
});



app.post('/sign', (req, res) => {
  const { username, password} = req.body;
  
  // Insert data into MySQL
  const query = 'INSERT INTO sign (username, password) VALUES (?,?)';
  con.query(query, [ username, password ], (error, results) => {
    if (error) throw error;
    console.log('Data inserted into MySQL');
    res.send('Data inserted into MySQL');
  });
});




    
app.listen(1999,()=>{
console.log('the server listen at posrt http://localhost:1999');
});