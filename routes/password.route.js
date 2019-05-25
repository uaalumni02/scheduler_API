import express from 'express';
import mongoose from 'mongoose';

//import model
import Passwords from '../models/password';

// import controller
import passwordController from '../controllers/password';

const router = express.Router();

// Insert JSON straight into MongoDB
router.post('/', passwordController.addPassword);

//get all passwords
router.get('/', passwordController.getAllPasswords);

//get passwords by entry
router.get('/:password', passwordController.getPswdByEntry);

export default router;