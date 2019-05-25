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
      const { time } = res, timeData = { time }
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

export const getAllTimes = async model => {
  try {
    const allTimes = await model.find({});
    return allTimes
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
export const addNewMessage = async (model, data) => {
  const newMessage = new model({ ...data });
  return newMessage.save()
    .then(res => {
      const { firstName, lastName, email, phone, message } = res, messageData = { firstName, lastName, email, phone, message }
      return messageData
    })
    .catch(error => {
      return { error }
    })
}
export const getAllMessages = async model => {
  try {
    const allMessages = await model.find({});
    return allMessages
  } catch (error) {
    throw error;
  }
}

export const addNewPassword = async (model, data) => {
  const newPassword = new model({ ...data });
  return newPassword.save()
    .then(res => {
      const { password } = res, appointmentData = { password }
      return res
    })
    .catch(error => {
      return { error }
    })
}
export const getAllPasswords = async model => {
  try {
    const allPasswords = await model.find({});
    return allPasswords
  } catch (error) {
    throw error;
  }
}

export const getPswdByEntry = async (model, password) => {
  try {
    const pswdEntry = await model.find({ password })
    return pswdEntry
  } catch (error) {
    throw error;
  }
}