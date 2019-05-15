import * as db from '../db/db';
import Contact from '../models/contact';

class Message {
    static async addContactMessage(req, res) {
       const newMessageData = {
           firstName: req.body.firstName,
           lastName: req.body.lastName,
           email: req.body.email,
           phone: req.body.phone,
           message: req.body.message
       }
        try {
            const addMessage = await db.addNewMessage(Contact, newMessageData)
            return res.status(200).json(addMessage)
        } catch (error) {
            res.status(500).json({ error: error })
        }
    }
    static async getAllMessages(req, res) {
        try {
            const allMessages = await db.getAllMessages(Contact)
            return res.status(200).json(allMessages)
        } catch (error) {
            res.status(500).json({ error: error })
        }
    }
}


export default Message;