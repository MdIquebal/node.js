const {Schema, model} = require('mongoose')
const contactSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    father: {
        type: String,
        required: true,
        trim: true
    },
    mother: {
        type: String,
        required: true,
        trim: true
    },
    birth: {
        type: String,
        required: true,
        trim: true
    },
    birthDate: {
        type: String,
        required: true,
        trim: true
    },
    gender: {
        type: String,
        required: true,
        trim: true
    },
    religion: {
        type: String,
        required: true,
        trim: true
    },
    nationality: {
        type: String,
        required: true,
        trim: true
    },
    study: {
        type: String,
        required: true,
        trim: true
    },
    presAddress: {
        type: String,
        required: true,
        trim: true
    },
    
    perAddress: {
        type: String,
        required: true,
        trim: true
    },
    
    phone: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true
    },
    
})

const Contact = model('Contact', contactSchema)

module.exports = Contact