const express = require('express');
const cors=require('cors');
const bodyParser = require('body-parser');
const {  ObjectId } = require('mongodb');

const app = express();


app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));




  
app.get('/review', async (req, res) => {
    try {
        const collection = req.database.collection("review");
        // Retrieve the inserted document
        const doctors = await collection.find( { _id: { $exists: true } } ).count()


        // Send back the inserted document as the response
        res.status(200).json(doctors);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error inserting document');
    }
});



app.get('/contact', async (req, res) => {
    try {
        const collection = req.database.collection("contact");
        // Retrieve the inserted document
        const doctors = await collection.find( { _id: { $exists: true } } ).count()


        // Send back the inserted document as the response
        res.status(200).json(doctors);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error inserting document');
    }
});

app.get('/acceptreview', async (req, res) => {
    try {
        const collection = req.database.collection("review");
        // Retrieve the inserted document
        const doctors = await collection.countDocuments({ status: "accept" });


        // Send back the inserted document as the response
        res.status(200).json(doctors);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error inserting document');
    }
});




app.get('/guests', async (req, res) => {
    try {
        const collection = req.database.collection("guests");
        // Retrieve the inserted document
        const doctors = await collection.find( { _id: { $exists: true } } ).count()


        // Send back the inserted document as the response
        res.status(200).json(doctors);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error inserting document');
    }
});




app.get('/appointment', async (req, res) => {
    try {
        const collection = req.database.collection("appointment");
        // Retrieve the inserted document
        const doctors = await collection.find( { _id: { $exists: true } } ).count()


        // Send back the inserted document as the response
        res.status(200).json(doctors);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error inserting document');
    }
});





app.get('/doctor', async (req, res) => {
    try {
        const collection = req.database.collection("guests");
        // Retrieve the inserted document
        const doctors = await collection.countDocuments({ role: "doctor" });


        // Send back the inserted document as the response
        res.status(200).json(doctors);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error inserting document');
    }
});


app.get('/patient', async (req, res) => {
    try {
        const collection = req.database.collection("guests");
        // Retrieve the inserted document
        const doctors = await collection.countDocuments({ role: "patient" });


        // Send back the inserted document as the response
        res.status(200).json(doctors);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error inserting document');
    }
});

module.exports = app;