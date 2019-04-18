import mongoose, { version } from 'mongoose';
const Schema = mongoose.Schema;

const timeInformationSchema = mongoose.Schema({
    __v: {
        type: Number,
        select: false
    },
    appointmentDate: {
        type: String,
        required: true,
      },
    startTime: {
        type: String,
        required: true,
    },

});


export default mongoose.model('Times', timeInformationSchema);