import express from 'express';

import Times from '../models/time';

import timeController from '../controllers/time';

const router = express.Router();

router.post('/', timeController.addTime);
router.get('/', timeController.getAllTimes);

export default router;