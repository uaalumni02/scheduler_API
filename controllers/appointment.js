import moment from 'moment';

import * as db from '../db/db';

import Appointments from '../models/appointment';

import handler from '../helpers/twilioHelper'

class Appointment {
    static async addAppointment(req, res) {

        const newAppointmentData = {
            name: req.body.name,
            phone: req.body.phone,
            email: req.body.email,
            service: req.body.service,
        };
        const userMessage = newAppointmentData.name + ', your appointment has been successfully scheduled with De\'Meco'
        try {
            const addAppointments = await db.addNewAppointment(Appointments, newAppointmentData)
            // calling twilio helper function
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
}

export default Appointment;