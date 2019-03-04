import express from 'express';
import mongoose from 'mongoose';
import moment from 'moment';
import Joi from 'joi';

import * as db from '../db/db';

import Appointments from '../models/appointment';

const router = express.Router();

//add appts
router.addAppointment = ('/', async (req, res, next) => {
    const appointmentDate = req.body.appointmentDate;
    const appointmentTimestamp = moment(appointmentDate, 'YYYY-MM-DD hh:mmA').unix()
    const newAppointmentData = {
        name: req.body.name,
        appointmentDate: appointmentTimestamp,
        service: req.body.service
    };
    try {
        const addAppointments = await db.addNewAppointment(Appointments, newAppointmentData)
        return res.status(200).json(addAppointments)
    } catch (error) {
        console.log(error.message)
    }
})



//show all appts
router.getAllAppointments = ('/appointments', async (req, res) => {
    try {
        const allAppointments = await db.getAllAppointments(Appointments)
        return res.status(200).json(allAppointments)
    } catch (error) {
        console.log(error.message)
    }

})


export default router;