import express from 'express';
import mongoose from 'mongoose';

const { validateBody, schemas } = require('../helpers/routeHelpers');

//import model
import Services from '../models/service';
// import controller
import serviceController from './src/controllers/Service';

const router = express.Router();

// Insert JSON straight into MongoDB
router.post('/', validateBody(schemas.bodySchema), serviceController.addService);
//shows all data
router.get('/', serviceController.getAllServices);
//delete data
router.delete('/:id', serviceController.deleteService);
//edit service
router.patch('/:id', serviceController.editService);

export default router;