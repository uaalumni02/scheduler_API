import * as db from '../db/db';

import Times from '../models/time';

class Time {
    static async addTime(req, res) {
        const newTimeData = {
            time: req.body.time,
        };
        try {
            const addTime = await db.addNewTime(Times, newTimeData)
            return res.status(200).json(addTime)
        } catch (error) {
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