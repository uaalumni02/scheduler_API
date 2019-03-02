export const getAllServices = async model => {
  try {
    const allServices = await model.find({});
    return allServices
  } catch(error) {
    throw error;
  }
}


export const getAllAppointments = async model => {
  try {
    const allAppointments = await model.find({});
    return allAppointments
  } catch(error) {
    throw error;
  }
}