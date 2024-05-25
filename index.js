const express = require('express');
const guestsRouter = require('./guests');


const app = express();
app.use('/guests', guestsRouter);


const port = 1999;
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});