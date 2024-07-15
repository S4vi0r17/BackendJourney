import { Document, Schema, model } from 'mongoose'
import bcrypt from 'bcrypt'
import generateId from '../helpers/id-generator.helper'

interface ITrainer extends Document {
    name: string
    password: string
    email: string
    phone: string
    web: string
    token: string | null
    confirmed: boolean
}

const trainerSchema = new Schema<ITrainer>({
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
        type: String,
        default: generateId()
    },
    confirmed: {
        type: Boolean,
        default: false
    }
})

// Hook pre-save para hashear el password
trainerSchema.pre('save', async function(next) {
    // Solo hashear el password si ha sido modificado (o es nuevo)
    if (!this.isModified('password')) return next()

    // Generar un salt
    const salt = await bcrypt.genSalt(10)
    // Crear el hash del password y asignarlo al campo password
    this.password = await bcrypt.hash(this.password, salt)
    next()
});

const Trainer = model('Trainer', trainerSchema)

export default Trainer
