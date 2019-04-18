import moment from 'moment';

import * as db from '../db/db';

import Times from '../models/time';

class Time {
    static async addTime(req, res) {

        const newTimeData = {
            appointmentDate: req.body.appointmentDate,
            startTime: req.body.startTime
        };

        try {
            const addTimes = await db.addNewTime(Times, newTimeData)
            return res.status(200).json(addTimes)
        }
        catch (error) {
            res.status(500).json({ error: error })
        }
    }
    static async getAllTimes(req, res) {
        try {
            const allTimes = await db.getAllTimes(Times)
            return res.status(200).json(allTimes)
        } catch (error) {
            res.status(500).json({ error: error })
        }
    }
    static async getTimesByDate(req, res) {
        const { appointmentDate } = req.params;
        try {
            const timesByDate = await db.getTimesByDate(Times, appointmentDate)
            return res.status(200).json(timesByDate)
        } catch (error) {
            res.status(500).json({ error: error })
        }
    }
}

export default Time;