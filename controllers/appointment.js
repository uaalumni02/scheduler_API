import express from 'express';
import mongoose from 'mongoose';
import moment from 'moment';


import Appointments from '../models/appointment';

const router = express.Router();


//add appts
router.addAppointment = ('/', (req, res, next) => {
    const appointmentDate = req.body.appointmentDate;
    const appointmentTimestamp = moment(appointmentDate, 'YYYY-MM-DD hh:mmA').unix();
    const appointmentInformation = new Appointments({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        appointmentDate: appointmentTimestamp,
        services: req.body.services
    });
    console.log(appointmentDate)
    appointmentInformation
    .save()
    .then(result => {
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

//show all appts
router.getAllAppointments = ('/appointments', (req, res) => {
    Appointments.find()
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