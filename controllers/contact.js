import * as db from '../db/db';
import Contact from '../models/contact';
import gmail from 'node-gmailer';

const TWILIO_ID = process.env.TWILIO_ACCOUNT_ID;

class Message {
    static async addContactMessage(req, res) {
        const newMessageData = {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            phone: req.body.phone,
            message: req.body.message
        }
        const customerMessage = 'You have a message from ' + newMessageData.firstName  + ' ' + newMessageData.lastName  + ' that says: ' + newMessageData.message;
        const recipient = process.env.GMAIL_ADDRESS;
        const messageData = {
            subject: 'Customer Message',
            text: customerMessage,
        }
        const sendHandler = () => {
            gmail.send(recipient, messageData)
                .then(response => {
                })
                .catch(error => {
                });
        }
        try {
            const addMessage = await db.addNewMessage(Contact, newMessageData)
            sendHandler()
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

