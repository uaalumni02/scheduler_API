import 'dotenv/config';
import express from 'express';
import mongoose, { MongooseDocument } from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';



//import routes
import serviceRoutes from './routes/service.route';
import appointmentRoutes from './routes/appointment.route';
import timeRoutes from './routes/time.route';
import contactRoutes from './routes/contact.route';
import passwordRoutes from './routes/password.route';

const app = express();

mongoose.Promise = global.Promise

const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

//middleware to utilize routes
app.use('/services', serviceRoutes);
app.use('/appointments', appointmentRoutes);
app.use('/times', timeRoutes);
app.use('/contacts', contactRoutes);
app.use('/passwords', passwordRoutes);

const DB_URL = process.env.MONGO_URL;

// Connect to mongoose
mongoose.connect(DB_URL, { useNewUrlParser: true }, (err) => {
    if (err)
        return console.log('Unable to Connect to MongoDB')
    return console.log('Connection Successful')
})
 

app.listen(port, () => console.log('server is running'));