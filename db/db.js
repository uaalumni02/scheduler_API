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
      const { name, phone, email, appointmentDate, startTime, service } = res, appointmentData = { name, phone, email, appointmentDate, startTime, service }
      return res
    })
    .catch(error => {
      return { error }
    })
}

export const addNewTime = async (model, data) => {
  const newTime = new model({ ...data });
  return newTime.save()
    .then(res => {
      const { appointmentDate, startTime } = res, timeData = { appointmentDate, startTime }
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

export const getApptsByDate = async (model, appointmentDate) => {
  try {
    const appointments = await model.find({ appointmentDate })
    return appointments
  } catch (error) {
    throw error;
  }
}
