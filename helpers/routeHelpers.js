import Joi from 'joi';


module.exports = {
    validateBody: (schema) => {
return (req, res, next) => {
    const result = Joi.validate(req.body, schema);
    if (result.error) {
        return res.status(400).json(result.error)
    }
    if (!req.value) { req.value = {}; }
    req.value['body'] = result.value;
    next();
}
    },

    schemas: {
        bodySchema: Joi.object().keys({
            name: Joi.string().required().min(2).max(25),
            price: Joi.number().required(),
            time: Joi.number().required()
        })
    }
}




