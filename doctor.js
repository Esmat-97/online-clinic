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






app.get('/', (req, res) => {
    const query = 'SELECT * FROM guests WHERE role = ?';
    const role = 'Doctor';
    
    con.query(query, [role], (error, results) => {
      if (error) {
        console.error('Error executing query', error);
        res.status(500).send('Error executing query');
        return;
      }

      res.json(results);
    });
  });
  




  app.delete('/', (req, res) => {


    const {id} = req.query; 

    if (!id) {
      res.status(400).send('ID is required');
      return;
    }
    const query = "DELETE  FROM guests WHERE id = ?";

    con.query(query, [id], (error, results) => {
      if (error) {
        console.error('Error executing query', error);
        res.status(500).send('Error executing query');
        return;
      }

      res.json(results);
    });
  });

module.exports = app;