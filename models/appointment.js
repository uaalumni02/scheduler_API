import mongoose, { version } from 'mongoose';
const Schema = mongoose.Schema;

const isValidCustomerName = (name) => {
  const regExp = /^([A-Za-z]+[,.]?[ ]?|[A-Za-z]+['-]?)+$/i
  return regExp.test(name)
};

const isValidService = (service) => {
  const regExp = /(?! )[A-Za-z\s]/i
  return regExp.test(service)
};

const appointmentInformationSchema = mongoose.Schema({
  __v: {
    type: Number,
    select: false
  },
  name: {
    type: String,
    required: [true, 'name is required'],
    min: 2,
    max: 12,
    validate: [isValidCustomerName, 'Please enter valid customer name'],
  },
  appointmentDate: {
    type: Number,
    required: true,
  },
  startTime: {
    type: Number,
    required: true,
  },
  endTime: {
    type: Number,
    required: true,
  },
  service: {
    type: Schema.Types.ObjectId,
    ref: 'services',
  },
});


export default mongoose.model('Appointments', appointmentInformationSchema);