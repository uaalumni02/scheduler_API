import express from 'express';
import mongoose from 'mongoose';
import moment from 'moment';
import Joi from 'joi';

import * as db from '../db/db';

import Appointments from '../models/appointment';

const router = express.Router();


//add appts
router.addAppointment = ('/', (req, res, next) => {
    const appointmentDate = req.body.appointmentDate;
    const appointmentTimestamp = moment(appointmentDate, 'YYYY-MM-DD hh:mmA').unix();
    const appointmentInformation = new Appointments({
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
router.getAllAppointments = ('/appointments', async (req, res) => {
    try {
        const allAppointments = await db.getAllAppointments(Appointments)
        return res.status(200).json(allAppointments)
    } catch(error) {
        console.log(error.message)
    }

})


export default router;