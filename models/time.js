import mongoose from 'mongoose';

const shchema = mongoose.Schema;


const timesInformationSchema = mongoose.Schema({
    __v: {
       type: Number,
       select: false
    },
    time: {
       type: String,
       required: true,
       
    },
 });
 
 
 export default mongoose.model('Times', timesInformationSchema);
 
 
 
