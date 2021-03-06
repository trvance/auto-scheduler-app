import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

import employeeRoutes from './routes/employees.js'

const app = express();
dotenv.config();


app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use('/employees', employeeRoutes);

app.get('/', (req, res) => {
    res.send('This is the Auto-Scheduler API');
})

var PORT = process.env.PORT || 5000;


mongoose.connect(process.env.CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`Server is running on port ${PORT}`)))
    .catch((error) => console.log(error));

mongoose.set('useFindAndModify', false);