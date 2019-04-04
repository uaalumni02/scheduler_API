import twilio from 'twilio';

const TWILIO_ID = process.env.TWILIO_ACCOUNT_ID;
const TWILIO_TOKEN = process.env.TWILIO_AUTH_TOKEN;
const TWILIO_PHONE = process.env.TWILIO_PHONE_NUMBER;


const Twilio = twilio(TWILIO_ID, TWILIO_TOKEN);

const handler = (userMessage, newAppointmentData) => {
    Twilio.messages.create({
        body: userMessage,
        to: newAppointmentData,
        from: TWILIO_PHONE,
    })
}

export default handler




