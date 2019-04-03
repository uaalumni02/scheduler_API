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
      const { name, phone, appointmentDate, service } = res, appointmentData = { name, phone, appointmentDate, service }
      return res
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
    const allAppointments = await model.find({}).populate('service').exec()
    return allAppointments
  } catch (error) {
    throw error;
  }
}

export const removeService = async (model, id) => {
  try {
    const deleteService = await model.findOneAndDelete({ _id: id })
    return deleteService
  } catch (error) {
    throw error
  }
}


export const editService = async (model, data) => {
  try {
    const editService = await model.update({ ...data })
    return data
  } catch (error) {
    throw error
  }
}

export const getApptByDate = async (model, appointmentDate) => {
  try {
    const dailyAppt = await model.find({ appointmentDate })
    return dailyAppt
  } catch (error) {
    throw error;
  }
}

