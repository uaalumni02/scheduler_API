import express from 'express';
import mongoose from 'mongoose';


//import model
import Appointments from '../models/appointment';
// import controller
import appointmentController from '../controllers/Appointment';

const router = express.Router();

// Insert JSON straight into MongoDB
router.post('/', appointmentController.addAppointment);

//get all appts
router.get('/', appointmentController.getAllAppointments);

export default router;