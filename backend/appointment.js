const express = require('express');
const cors=require('cors');
const bodyParser = require('body-parser');
const { MongoClient , ObjectId } = require('mongodb');

const app = express();


const uri = "mongodb://localhost:27017/";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

async function connectToDatabase() {
    try {
        await client.connect();
        console.log("Connected appointment to the database");
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
        const database = client.db("clinc"); // Fixed typo
        const collection = database.collection("appointment");

        const doc = req.body;

        // Check for duplicate
        const all = await collection.find({}).toArray();

        let isDuplicate = false;

        for (let appointment of all) {
            if (appointment.patient_name === doc.patient_name && appointment.doctor_name === doc.doctor_name) {
                isDuplicate = true;
                break;
            }
        }

        if (isDuplicate) {
            res.status(409).send('Document duplicated'); // 409 Conflict for duplicate
        } else {
            const result = await collection.insertOne(doc);

            // Retrieve the inserted document
            const insertedDoc = await collection.findOne({ _id: result.insertedId });

            // Send back the inserted document as the response
            res.status(200).json(insertedDoc);
        }
    } catch (error) {
        console.error(error);
        res.status(500).send('Error inserting document');
    }
});





app.get('/:id', async (req, res) => {
    try {
        const database = client.db("clinc");
        const collection = database.collection("appointment");

        const documentId = req.params.id;

        const result = await collection.find({ doctor_id:documentId}).toArray();


        if (result) {
            res.status(200).json(result);
        } else {
            res.status(404).send('Document not found');
        }
    } catch (error) {
        console.error('Error fetching document:', error);
        res.status(500).send('Error fetching document');
    }
});







app.get('/', async (req, res) => {
    try {
        const database = client.db("clinc");
        const collection = database.collection("appointment");

        const result = await collection.find({}).toArray();

        res.status(200).json(result);
    } catch (error) {
        console.error('Error fetching documents:', error.message);
        res.status(500).send(`Error fetching documents: ${error.message}`);
    }
});





app.delete('/:id', async (req, res) => {
    try {

        const database = client.db("clinc");
        const collection = database.collection("appointment");

        const documentId = req.params.id;

        console.log(`del ${documentId}`)

        const result = await collection.deleteOne({ doctor_id: documentId });

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