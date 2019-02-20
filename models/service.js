import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const isValidService = (service) => {
   const regExp = /(?! )[A-Za-z\s]/i
   return regExp.test(service)
 };


const isValidPrice = (price) => {
   const regExp = /[0-9]?[0-9]?(\.[0-9][0-9]?)?/i
   return regExp.test(price)
 };

const serviceInformationSchema = mongoose.Schema({

   _id: mongoose.Schema.Types.ObjectId,
   Services: {
      type: String,
      required: [true, 'Service is required'],
      validate: [isValidService, 'Please enter a valid Service'],
   },
   appointmentDate: {
      type: Number,
      required: true 
  },
   Price: {
      type: Number,
      required: [true, 'Price is required'],
      validate: [isValidPrice, 'Please enter a valid Price'],
   },
});



export default mongoose.model('Services', serviceInformationSchema);


