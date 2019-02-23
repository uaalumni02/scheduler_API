import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const isValidCustomerName = (name) => {
  const regExp = /^([A-Za-z]+[,.]?[ ]?|[A-Za-z]+['-]?)+$/i
  return regExp.test(name)
};

// const isValidAppointment = (appointment) => {
//   const regExp = /\d{4}-\d{2}-\d{2}\s\d{2}:\d{2}:\d{2}/i;
//   return regExp.test(appointment)
// };

const appointmentInformationSchema = mongoose.Schema({

  _id: mongoose.Schema.Types.ObjectId,
  name: {
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

});

export default mongoose.model('Appointments', appointmentInformationSchema);