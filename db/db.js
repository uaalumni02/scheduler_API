export const getAllServices = async model => {
  try {
    const allServices = await model.find({});
    return allServices
  } catch(error) {
    throw error;
  }
}
