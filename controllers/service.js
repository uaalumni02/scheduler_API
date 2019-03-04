import express from 'express';
import mongoose from 'mongoose';


import * as db from '../db/db';
import service from '../models/service';

const router = express.Router();


//send service data to db
router.addServices = ('/services', async (req, res, next) => {
    const newServiceData = {...req.body};
    try {
        const addServices = await db.addNewService(service, newServiceData)
        return res.status(200).json(addServices)
    } catch(error) {
        console.log(error.message)
    }
})


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
router.deleteService = ('/:id', async (req, res) => {
    const id = req.params.id;
    const idToDelete = {
        _id: id
    }
   try {
    const serviceToDelete = await db.removeService(service, idToDelete)
    console.log(serviceToDelete)
    return res.status(200).json(serviceToDelete)
    } catch(error) {
        console.log(error.message)
    }
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
