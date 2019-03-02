import express from 'express';
import mongoose from 'mongoose';


import * as db from '../db/db';
import service from '../models/service';

const router = express.Router();


//send service data to db
router.addServices = ('/services', (req, res, next) => {
    const serviceInformation = new services({
        services: req.body.services,
        price: req.body.price,
        time: req.body.time
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


//get all services from db
router.getAllServices = ('/services', async (req, res) => {
    try {
        const allServices = await db.getAllServices(service)
        return res.status(200).json(allServices)
    } catch(error) {
        console.log(error.message)
    }
})

//remove service from the db
router.deleteService = ('/:id', (req, res) => {
    const id = req.params.id;
    services.findOneAndDelete({ '_id': id })
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
        services: req.body.services,
        price: req.body.price,
        time: req.body.time
    };
    services.update({ $set: updateOps })
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
