import mongoose, { version } from 'mongoose';
const Schema = mongoose.Schema;


const passwordInformationSchema = mongoose.Schema({
    __v: {
        type: Number,
        select: false
    },
    password: {
        type: String,
        required: [true, 'password is requrired'],
        min: 2,
    },
    
});


export default mongoose.model('Passwords', passwordInformationSchema);