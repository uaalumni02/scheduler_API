import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const serviceInformationSchema = mongoose.Schema({

   _id: mongoose.Schema.Types.ObjectId,
   Services: {
      type: String,
   }
});



export default mongoose.model('Services', serviceInformationSchema);


