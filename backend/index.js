const express = require('express');

const AuthRouter = require('./Auth');
const doctorRouter = require('./doctor');
const workinghoursRouter = require('./workinghours');
const appointmentRouter = require('./appointment');



const app = express();

app.use('/Auth', AuthRouter);
app.use('/doctor', doctorRouter);
app.use('/workinghours', workinghoursRouter);
app.use('/appointment', appointmentRouter);



const port = 1999;
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});