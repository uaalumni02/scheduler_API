import express from 'express';
import mongoose from 'mongoose';


import * as db from '../db/db';
import service from '../models/service';

const router = express.Router();

'use strict'

class Service {
    static async addService(req, res) {
        const newServiceData = { ...req.body };
        const currentTime = new Date();
        const timestamp = currentTime.valueOf()
        try {
            const addServices = await db.addNewService(service, newServiceData, timestamp)
            return res.status(200).json(addServices)
        } catch (error) {
            res.status(500).json({ error: error })
        }
    }
    static async getAllServices(req, res) {
        try {
            const allServices = await db.getAllServices(service)
            return res.status(200).json(allServices)
        } catch (error) {
            res.status(500).json({ error: error })
        }
    }
    static async deleteService(req, res) {
        const { id } = req.params;
        try {
            const serviceToDelete = await db.removeService(service, id)
            return res.status(200).json(serviceToDelete)
        } catch (error) {
            res.status(500).json({ error: error })
        }
    }
    static async editService(req, res) {
        const id = req.params.id;
        const newServiceData = { ...req.body };
        const currentTime = new Date();
        const timestamp = currentTime.valueOf()
        console.log(timestamp)
        const { name, price, time } = req.body,
            updateService = { name, price, time };
        try {
            const serviceToEdit = await db.editService(service, updateService, timestamp)
            return res.status(200).json(serviceToEdit)
        } catch (error) {
            res.status(500).json({ error: error })
        }
    }
}

export default Service;

