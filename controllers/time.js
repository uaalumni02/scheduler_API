import moment from 'moment';

import * as db from '../db/db';

import Times from '../models/time';

class Time {
    static async addTime(req, res) {
        const startTime = req.body.startTime;
        const startTimeTimestamp = moment(startTime, 'HH:mm:ss').unix()

        const newTimeData = {
            startTime: startTimeTimestamp,
        };
        //converting time stamp back readable 
        const timeString = moment.unix(newTimeData.startTime).format('HH:mm:ss')
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
}

export default Time;