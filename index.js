const express = require('express');
const AuthRouter = require('./Auth');
const doctorRouter = require('./doctor');



const app = express();
app.use('/Auth', AuthRouter);
app.use('/doctor', doctorRouter);



const port = 1999;
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});