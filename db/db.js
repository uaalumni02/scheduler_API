export const addNewService = async (model, data) => {
  const newService = new model({ ...data });
  return newService.save()
    .then(res => {
      const { _id, name, price, time } = res, serviceData = { _id, name, price, time }
      return serviceData
    })
    .catch(error => {
      return { error }
    })
}


export const addNewAppointment = async (model, data) => {
  const newAppointment = new model({ ...data });
  return newAppointment.save()
    .then(res => {
      const { name, appointmentDate, services } = res, appointmentData = { name, appointmentDate, services }
      return appointmentData
    })
    .catch(error => {
      return { error }
    })
}


export const getAllServices = async model => {
  try {
    const allServices = await model.find({});
    return allServices
  } catch (error) {
    throw error;
  }
}


export const getAllAppointments = async model => {
  try {
    const allAppointments = await model.find({});
    return allAppointments
  } catch (error) {
    throw error;
  }
}

