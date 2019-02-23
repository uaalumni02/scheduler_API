import express from 'express';
import mongoose from 'mongoose';

//import model
import Appointments from '../models/appointment';
// import controller
import appointmentController from '../controllers/appointment';

const router = express.Router();

// Insert JSON straight into MongoDB
router.post('/', appointmentController.addAppointment);

export default router;