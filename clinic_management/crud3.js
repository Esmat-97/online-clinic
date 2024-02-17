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
database:'node'
});



app.get('/',(req,res)=>{

  const query = "SELECT * FROM  Doctors";

  con.query(query, (err, result) => {
    if (err) {
        // If an error occurs, send an error response
        console.error("Error executing query:", err);
        res.status(500).json({ error: "Failed to fetch data" });
    } else {
        // If successful, send the fetched data as a response
        res.json(result);
    }
});
    
});


app.post('/api', (req, res) => {
  const { name, speciality ,years_of_experience, hospital, location,  gender} = req.body;
  
  // Insert data into MySQL
  const query = 'INSERT INTO Doctors (name,  specialty ,years_of_experience, hospital, location,  gender) VALUES (?, ?,?,?,?,?)';
  con.query(query, [ name, speciality ,years_of_experience, hospital, location,  gender ], (error, results) => {
    if (error) throw error;
    console.log('Data inserted into MySQL');
    res.send('Data inserted into MySQL');
  });
});






    
app.listen(1999,()=>{
console.log('the server listen at posrt http://localhost:1999');
});