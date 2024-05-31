const express = require('express');
const cors=require('cors');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const bodyParser = require('body-parser');
const { MongoClient , ObjectId } = require('mongodb');

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
        const collection = database.collection("workinghours");
        
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



app.get('/:id', async (req, res) => {
    try {
        const database = client.db("clinc");
        const collection = database.collection("workinghours");

        const documentId = req.params.id;

        const result = await collection.findOne({ doctor_id:documentId});

        console.log(documentId)

        if (result) {
            res.status(200).json([result]);
        } else {
            res.status(404).send('Document not found');
        }
    } catch (error) {
        console.error('Error fetching document:', error);
        res.status(500).send('Error fetching document');
    }
});



app.delete('documents/:id', async (req, res) => {
    try {

        const database = client.db("clinc");
        const collection = database.collection("workinghours");

        const documentId = req.params.id;

        const result = await collection.deleteOne({ _id: new ObjectId(documentId) });

        if (result.deletedCount === 1) {
            res.status(200).send('Document successfully deleted');
        } else {
            res.status(404).send('Document not found');
        }
    } catch (error) {
        console.error('Error deleting document:', error);
        res.status(500).send('Error deleting document');
    }
});



module.exports = app;