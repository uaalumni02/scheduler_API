import mongoose, { version } from 'mongoose';
const Schema = mongoose.Schema;

const isValidFirstName = (firstName) => {
    const regExp = /^([A-Za-z]+[,.]?[ ]?|[A-Za-z]+['-]?)+$/i
    return regExp.test(firstName)
};

const isValidLastName = (lastName) => {
    const regExp = /^([A-Za-z]+[,.]?[ ]?|[A-Za-z]+['-]?)+$/i
    return regExp.test(lastName)
};

const isValidEmail = (email) => {
    const regExp = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,7})$/i;
    return regExp.test(email)
};

const isValidPhoneNumber = (phone) => {
    const regExp = /^(1\s?)?((\([0-9]{3}\))|[0-9]{3})[\s\-]?[\0-9]{3}[\s\-]?[0-9]{4}$/i;
    return regExp.test(phone)
};


const contactInformationSchema = mongoose.Schema({
    __v: {
        type: Number,
        select: false
    },
    firstName: {
        type: String,
        required: [true, 'first name is required'],
        min: 2,
        max: 12,
        validate: [isValidFirstName, 'Please enter valid first name'],
    },
    lastName: {
        type: String,
        required: [true, 'last name is required'],
        min: 2,
        max: 12,
        validate: [isValidLastName, 'Please enter valid last name'],
    },
    email: {
        type: String,
        required: [true, 'Email address is required'],
        validate: [isValidEmail, 'Please enter a valid email address'],
    },
    phone: {
        type: String,
        required: [true, 'Phone number is requrired'],
        validate: [isValidPhoneNumber, 'Please enter a valid phone number'],
    },
    message: {
        type: String,
        required: [true, 'message is requrired'],
        min: 2,
    },
    
});


export default mongoose.model('Messages', contactInformationSchema);