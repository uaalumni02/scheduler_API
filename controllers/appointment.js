import moment from 'moment';
import Joi from 'joi';

import * as db from '../db/db';

import Appointments from '../models/appointment';


class Appointment {
    static async addAppointment(req, res) {
        const appointmentDate = req.body.appointmentDate;
        const startTime = req.body.startTime;
        const endTime = req.body.endTime;
        const appointmentTimestamp = moment(appointmentDate, 'YYYY-MM-DD').unix()
        console.log(appointmentTimestamp)
        const startTimeTimestamp = moment(startTime, 'HH:mm:ss').unix()
        const endTimeTimestamp = moment(endTime, 'HH:mm:ss A').unix()

        const newAppointmentData = {
            name: req.body.name,
            appointmentDate: appointmentTimestamp,
            startTime: startTimeTimestamp,
            endTime: endTimeTimestamp,
            service: req.body.service
        };
        try {
            const addAppointments = await db.addNewAppointment(Appointments, newAppointmentData)
            return res.status(200).json(addAppointments)
        } catch (error) {
            res.status(500).json({ error: error })
        }
    }
    static async getAllAppointments(req, res) {
        try {
            const allAppointments = await db.getAllAppointments(Appointments)
            return res.status(200).json(allAppointments)
        } catch (error) {
            res.status(500).json({ error: error })
        }
    }
}


export default Appointment;