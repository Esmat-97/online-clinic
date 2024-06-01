const express = require('express');
const cors=require('cors');
const bodyParser = require('body-parser');


const app = express();


app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));




  
app.post('/', async (req, res) => {
    try {
      
        const collection = req.database.collection("guests");
        
        const doc = req.body;

        //check duplicate

        const all = await collection.find({}).toArray();

        let isDuplicate = false;

        for (let appointment of all) {
            if (appointment.email === doc.email ) {
                isDuplicate = true;
                break;
            }
        }

        if (isDuplicate) {
          res.status(409).send('Document duplicated'); // 409 Conflict for duplicate
      } else {

        const result = await collection.insertOne(doc);

        const insertedDoc = await collection.findOne({ _id: result.insertedId });

        res.status(200).json([insertedDoc]);
      }
    } catch (error) {
        console.error(error);
        res.status(500).send('Error inserting document');
    }
});




app.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

  
    const collection = req.database.collection("guests");

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