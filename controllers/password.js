import * as db from '../db/db';
import Passwords from '../models/password';


class Password {
    static async addPassword(req, res) {
        const newPasswordData = {
            password: req.body.password,
        };
        try {
            const addPassword = await db.addNewPassword(Passwords, newPasswordData)
            return res.status(200).json(addPassword)
        }
        catch (error) {
            res.status(500).json({ error: error })
        }
    }
    static async getAllPasswords(req, res) {
        try {
            const allPasswords = await db.getAllPasswords(Passwords)
            return res.status(200).json(allPasswords)
        } catch (error) {
            res.status(500).json({ error: error })
        }
    }
    static async getPswdByEntry(req, res) {
        const { password } = req.params;
        try {
            const pswdEntry = await db.getPswdByEntry(Passwords, password)
            return res.status(200).json(pswdEntry)
        } catch (error) {
            res.status(500).json({ error: error })
        }
    }
}

export default Password