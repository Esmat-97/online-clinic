const express = require('express');

const AuthRouter = require('./Auth');
const doctorRouter = require('./doctor');
const workinghoursRouter = require('./workinghours');
const appointmentRouter = require('./appointment');
const userRouter = require('./users');
const contactRouter = require('./contact');
const specialtyRouter = require('./specialty');
const reviewRouter = require('./review');
const connectToDatabase = require('./dbMiddleware');


const app = express();
app.use(connectToDatabase);


app.use('/Auth', AuthRouter);
app.use('/doctor', doctorRouter);
app.use('/workinghours', workinghoursRouter);
app.use('/appointment', appointmentRouter);
app.use('/users', userRouter);
app.use('/contact', contactRouter);
app.use('/specialty', specialtyRouter);
app.use('/review', reviewRouter);


const port = 1999;
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});