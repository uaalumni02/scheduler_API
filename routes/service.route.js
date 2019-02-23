import express from 'express';
import mongoose from 'mongoose';

//import model
import Services from '../models/service';
// import controller
import serviceController from '../controllers/service';

const router = express.Router();

// Insert JSON straight into MongoDB
router.post('/', serviceController.addServices);
//shows all data
router.get('/', serviceController.getAllServices);
//delete data
router.delete('/:id', serviceController.deleteService);
//edit service
router.patch('/:id', serviceController.editService);

export default router;