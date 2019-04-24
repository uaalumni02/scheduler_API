import express from 'express';

import Times from '../models/time';

import timeController from '../controllers/time';

const router = express.Router();

router.post('/', timeController.addTime);

export default router;