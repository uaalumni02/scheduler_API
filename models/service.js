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

 const isValidTime = (time) => {
   const regExp = /[1-9]{1,2}[:.,-]?/i
   return regExp.test(time)
 };


const serviceInformationSchema = mongoose.Schema({

   _id: mongoose.Schema.Types.ObjectId,
   services: {
      type: String,
      required: [true, 'Service is required'],
      validate: [isValidService, 'Please enter a valid Service'],
   },
  
   price: {
      type: Number,
      required: [true, 'Price is required'],
      validate: [isValidPrice, 'Please enter a valid Price'],
   },

   time: {
      type: Number,
      required: [true, 'Time is required'],
      validate: [isValidTime, 'Please enter a valid Time'],
   },
});



export default mongoose.model('services', serviceInformationSchema);


