import 'dotenv/config';
import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import moment from 'moment';
import cors from 'cors';

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

//send service data to db
   app.post('/services', (req, res, next) => {
    const currentdate = req.body.appointmentDate;
    const appointmentTimestamp = moment(currentdate, 'YYYY-MM-DD hh:mmA').unix();
    const serviceInformation = new Services({
        _id: new mongoose.Types.ObjectId(),
        Services: req.body.Services,
        Price: req.body.Price,
        appointmentDate: appointmentTimestamp,
    });
    serviceInformation
        .save()
        .then(result => {
            console.log(result)
            if (result) {
                res.status(201).json({
                    message: 'Added to databse'
                })
            } else {
                res.status(404).json({ message: "Please enter valid information" });
            }
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ error: err })
        });
});


app.listen(3000, () => console.log('server is running'));