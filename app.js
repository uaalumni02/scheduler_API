import 'dotenv/config';
import express from 'express';
import mongoose  from 'mongoose';

const app = express();

const DB_URL = process.env.MONGO_URL;

// Connect to mongoose
mongoose.connect(DB_URL, (err) => {
    if (err)
        return console.log('Unable to Connect to MongoDB')
    return console.log('Connection Successful')
})








app.listen(3000, () => console.log('server is running'));