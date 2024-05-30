const express = require('express');
const cors=require('cors');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const bodyParser = require('body-parser');
const { MongoClient } = require('mongodb');

const app = express();
const port = 3000;

const uri = "mongodb://localhost:27017/";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

async function connectToDatabase() {
    try {
        await client.connect();
        console.log("Connected to the database");
    } catch (error) {
        console.error(error);
    }
}

connectToDatabase();

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));




  
app.post('/', async (req, res) => {
    try {
        const database = client.db("clinc");
        const collection = database.collection("guests");
        
        const doc = req.body;

        const result = await collection.insertOne(doc);

        // Retrieve the inserted document
        const insertedDoc = await collection.findOne({ _id: result.insertedId });

        // Send back the inserted document as the response
        res.status(200).json([insertedDoc]);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error inserting document');
    }
});




app.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    const database = client.db("clinc");
    const collection = database.collection("guests");

    const user = await collection.findOne({ email: email});
    if (user.password !== password) {
      return res.status(401).send('Incorrect password');
    }
    res.status(200).json([user]);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error during login');
  }
});



module.exports = app;