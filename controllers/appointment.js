import moment from 'moment';

import * as db from '../db/db';

import Appointments from '../models/appointment';

import handler from '../helpers/twilioHelper'

class Appointment {
    static async addAppointment(req, res) {
        const appointmentDate = req.body.appointmentDate;
        const appointmentTimestamp = moment(appointmentDate, 'YYYY-MM-DD').unix()
        const newAppointmentData = {
            name: req.body.name,
            phone: req.body.phone,
            email: req.body.email,
            appointmentDate: appointmentTimestamp,
            startTime: req.body.startTime,
            service: req.body.service
        };
        const dateString = moment.unix(newAppointmentData.appointmentDate).format('YYYY-MM-DD');
        const timeMessage = newAppointmentData.startTime
        const userMessage = newAppointmentData.name + ', your appointment is on ' + dateString + ' at ' + timeMessage ;
        try {
            const addAppointments = await db.addNewAppointment(Appointments, newAppointmentData)
            handler(userMessage, newAppointmentData.phone)
            return res.status(200).json(addAppointments)
        }
        catch (error) {
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
    static async getApptsByDate(req, res) {
        const { appointmentDate } = req.params;
        try {
            const apptsByDate = await db.getApptsByDate(Appointments, appointmentDate)
            return res.status(200).json(apptsByDate)
        } catch (error) {
            res.status(500).json({ error: error })
        }
    }
}

export default Appointment;