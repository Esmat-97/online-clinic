const express = require('express');
const AuthRouter = require('./Auth');


const app = express();
app.use('/Auth', AuthRouter);


const port = 1999;
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});