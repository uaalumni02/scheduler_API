import mongoose from 'mongoose';
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

  name: {
    _id: mongoose.Schema.Types.ObjectId,
    type: String,
    required: [true, 'name is required'],
    min: 2,
    max: 12,
    validate: [isValidCustomerName, 'Please enter valid customer name'],
  },
  appointmentDate: {
    type: Number,
    required: true 
},

services: {
  type: String,
  required: [true, 'Service is required'],
  validate: [isValidService, 'Please enter a valid Service'],
},

});

export default mongoose.model('Appointments', appointmentInformationSchema);