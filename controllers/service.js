import express from 'express';
import mongoose from 'mongoose';
import moment from 'moment';

import Services from '../models/service';

const router = express.Router();

//send service data to db
router.addServices = ('/services', (req, res, next) => {
    const currentdate = req.body.appointmentDate;
    const appointmentTimestamp = moment(currentdate, 'YYYY-MM-DD hh:mmA').unix();
    const serviceInformation = new Services({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
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


//get all service data
router.getAllServices = ('/services', (req, res) => {
    Services.find()
        .exec()
        .then(docs => {
            res.status(200).json(docs);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            });
        });
});


export default router;