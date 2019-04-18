import express from 'express';
import mongoose from 'mongoose';

//import model
import Times from '../models/time';

// import controller
import timeController from '../controllers/time';

const router = express.Router();

// Insert JSON straight into MongoDB
router.post('/', timeController.addTime);

//shows all data
router.get('/', timeController.getAllTimes);

//get appt times taken date
router.get('/:appointmentDate', timeController.getTimesByDate);

export default router;