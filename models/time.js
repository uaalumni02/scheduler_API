import mongoose, { version } from 'mongoose';
const Schema = mongoose.Schema;

const timeInformationSchema = mongoose.Schema({
    __v: {
        type: Number,
        select: false
    },
    startTime: {
        type: Number,
        required: true,
    },

});


export default mongoose.model('Times', timeInformationSchema);