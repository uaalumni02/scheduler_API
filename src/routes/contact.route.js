import express from 'express';
import mongoose from 'mongoose';


//import model
import Messages from '../models/contact';

// import controller
import contactController from '../controllers/contact';

const router = express.Router();

// Insert JSON straight into MongoDB
router.post('/', contactController.addContactMessage);

//get all messages
router.get('/', contactController.getAllMessages);

export default router;