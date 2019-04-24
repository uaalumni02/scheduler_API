import mongoose from 'mongoose';

const shchema = mongoose.Schema;


const timesInformationSchema = mongoose.Schema({
    __v: {
       type: Number,
       select: false
    },
    name: {
       type: String,
       required: [true, 'Name is required'],
       validate: [isValidName, 'Please enter a valid service Name'],
    },
 });
 
 
 export default mongoose.model('times', timesInformationSchema);
 
 
 
