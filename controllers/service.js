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
router.getAllServices = ('/', async (req, res) => {
    try {
        const allServices = await db.getAllServices(service)
        return res.status(200).json(allServices)
    } catch(error) {
        console.log(error.message)
    }
})

//remove service from the db
router.deleteService = ('/:id', async (req, res) => {
    const { id } = req.params;
   try {
    const serviceToDelete = await db.removeService(service, id)
    console.log(serviceToDelete)
    return res.status(200).json(serviceToDelete)
    } catch(error) {
        console.log(error.message)
    }
});

//edit service
router.editService = ('/:id', async (req, res) => {
    const id = req.params.id;
    const { name, price, time } = req.body,
        updateService = { name, price, time };
    try {
        const serviceToEdit = await db.editService(service, updateService)
        return res.status(200).json(serviceToEdit)
        } catch(error) {
            console.log(error.message)
        }
});


export default router;
