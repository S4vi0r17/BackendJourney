import { Schema, model } from 'mongoose'

const trainerSchema = new Schema({
    name: {
        type: String,
        require: true,
        trim: true
    },
    password: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true,
        trim: true,
        unique: true
    },
    phone: {
        type: String,
        trim: true,
        default: null
    },
    web: {
        type: String,
        default: null
    },
    token: {
        type: String
    },
    confirmed: {
        type: Boolean,
        default: false
    }
})

const Trainer = model('Trainer', trainerSchema)

export default Trainer
