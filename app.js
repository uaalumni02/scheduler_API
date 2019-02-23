import 'dotenv/config';
import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import moment from 'moment';
import cors from 'cors';

//import models
import Services from './models/service';

//import routes
import serviceRoutes from './routes/service.route';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());
const DB_URL = process.env.MONGO_URL;

// Connect to mongoose
mongoose.connect(DB_URL, (err) => {
    if (err)
        return console.log('Unable to Connect to MongoDB')
    return console.log('Connection Successful')
})

//middleware to utilize routes
app.use('/services', serviceRoutes);
 

app.listen(3000, () => console.log('server is running'));