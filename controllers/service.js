import express from 'express';
import mongoose from 'mongoose';


import * as db from '../db/db';
import service from '../models/service';

const router = express.Router();

'use strict'

class Service {
    static async addService(req, res) {
        const newServiceData = { ...req.body };
        try {
            const addServices = await db.addNewService(service, newServiceData)
            return res.status(200).json(addServices)
        } catch (error) {
            console.log(error.message)
        }
    }
    static async getAllServices(req, res) {
        try {
            const allServices = await db.getAllServices(service)
            return res.status(200).json(allServices)
        } catch (error) {
            console.log(error.message)
        }
    }
    static async deleteService(req, res) {
        const { id } = req.params;
        try {
            const serviceToDelete = await db.removeService(service, id)
            console.log(serviceToDelete)
            return res.status(200).json(serviceToDelete)
        } catch (error) {
            console.log(error.message)
        }
    }
    static async editService(req, res) {
        const id = req.params.id;
        const { name, price, time } = req.body,
            updateService = { name, price, time };
        try {
            const serviceToEdit = await db.editService(service, updateService)
            return res.status(200).json(serviceToEdit)
        } catch (error) {
            console.log(error.message)
        }
    }
}

export default Service;

