import moment from 'moment';
import twilio from 'twilio';

import * as db from '../db/db';

import Appointments from '../models/appointment';

const TWILIO_ID = process.env.TWILIO_ACCOUNT_ID;
const TWILIO_TOKEN = process.env.TWILIO_AUTH_TOKEN;
const TWILIO_PHONE = process.env.TWILIO_PHONE_NUMBER;


const Twilio = twilio(TWILIO_ID, TWILIO_TOKEN);


class Appointment {
    static async addAppointment(req, res) {
        const appointmentDate = req.body.appointmentDate;
        const startTime = req.body.startTime;
        const endTime = req.body.endTime;
        const appointmentTimestamp = moment(appointmentDate, 'MM-DD-YYYY').unix()
        const startTimeTimestamp = moment(startTime, 'HH:mm:ss').unix()
        const endTimeTimestamp = moment(endTime, 'HH:mm:ss A').unix()

        const newAppointmentData = {
            name: req.body.name,
            phone: req.body.phone,
            appointmentDate: appointmentTimestamp,
            startTime: startTimeTimestamp,
            endTime: endTimeTimestamp,
            service: req.body.service
        };
        const dateString = moment.unix(newAppointmentData.appointmentDate).format('MM-DD-YYYY');
        const timeString = moment.unix(newAppointmentData.startTime).format('HH:mm:ss')
        const userMessage = newAppointmentData.name + ', your appointment is on ' + dateString + ' at ' + timeString;
        try {
            const addAppointments = await db.addNewAppointment(Appointments, newAppointmentData)
            Twilio.messages.create({
                body: userMessage,
                to: newAppointmentData.phone,
                from: TWILIO_PHONE,
            })
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
    static async getApptByDate(req, res) {
        const { appointmentDate } = req.params;
        try {
            const allAppointments = await db.getApptByDate(Appointments, appointmentDate)
            return res.status(200).json(allAppointments)
        } catch (error) {
            res.status(500).json({ error: error })
        }
    }
}

export default Appointment;