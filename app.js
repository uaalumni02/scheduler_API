import 'dotenv/config';
import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';


//import routes
import serviceRoutes from './routes/service.route';
import appointmentRoutes from './routes/appointment.route';

const app = express();

const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

//middleware to utilize routes
app.use('/services', serviceRoutes);
app.use('/appointments', appointmentRoutes);


const DB_URL = process.env.MONGO_URL;

// Connect to mongoose
mongoose.connect(DB_URL, (err) => {
    if (err)
        return console.log('Unable to Connect to MongoDB')
    return console.log('Connection Successful')
})
 

app.listen(port, () => console.log('server is running'));