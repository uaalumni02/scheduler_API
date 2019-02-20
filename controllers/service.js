import express from 'express';
import mongoose from 'mongoose';
import moment from 'moment';

import Services from '../models/service';

const router = express.Router();


//get all service data
router.getAllServices =  ('/services', (req, res) => {
    Services.find()
        .exec()
        .then(docs => {
            res.status(200).json(docs);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            });
        });
});


export default router;