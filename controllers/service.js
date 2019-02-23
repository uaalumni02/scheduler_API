import express from 'express';
import mongoose from 'mongoose';
import moment from 'moment';

import Services from '../models/service';

const router = express.Router();

//send service data to db
router.addServices = ('/services', (req, res, next) => {
    const serviceInformation = new Services({
        _id: new mongoose.Types.ObjectId(),
        Services: req.body.Services,
        Price: req.body.Price,
    });
    serviceInformation
        .save()
        .then(result => {
            console.log(result)
            if (result) {
                res.status(201).json({
                    message: 'Added to databse'
                })
            } else {
                res.status(404).json({ message: "Please enter valid information" });
            }
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ error: err })
        });
});


//get all service data
router.getAllServices = ('/services', (req, res) => {
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

//remove service from the db
router.deleteService = ('/:id', (req, res) => {
    const id = req.params.id;
    Services.findOneAndDelete({ '_id': id })
        .exec()
        .then(result => {
            res.status(200).json(result);

        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            });
        });
});

//edit service
router.editService = ('/:id', (req, res) => {
    const id = req.params.customerId;
    const updateOps = { 
        Services: req.body.Services,
        Price: req.body.Price,
    };
    Services.update({ $set: updateOps })
        .exec()
        .then(result => {
            res.status(200).json(result);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            });
        });
});


export default router;