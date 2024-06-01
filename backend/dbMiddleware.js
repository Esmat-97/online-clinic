const { MongoClient } = require('mongodb');

const uri = "mongodb://localhost:27017/";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

async function connectToDatabase(req, res, next) {
  
        try {
            await client.connect();
            console.log("Connected to the database");
        } catch (error) {
            console.error(error);
            return res.status(500).send('Failed to connect to the database');
        }
    
   req.database = client.db("clinc");
    next();
}

module.exports = connectToDatabase;
