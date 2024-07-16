import { Document, Schema, model } from 'mongoose'

// Definir un enum para los niveles de ejercicio
enum ExerciseLevel {
    Low = 'Low',
    Medium = 'Medium',
    High = 'High'
}

export interface IClient extends Document {
    name: string
    email: string
    phone: number
    weight: number
    height: number
    trainer: Schema.Types.ObjectId
    exerciseLevel: ExerciseLevel
    note?: string
}

const ClientSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: Number, required: true },
    weight: { type: Number, required: true },
    height: { type: Number, required: true },
    exerciseLevel: { type: String, required: true, enum: Object.values(ExerciseLevel) }, // Usar el enum para validar
    trainer: { type: Schema.Types.ObjectId, ref: 'Trainer' },
    note: { type: String }
}, {
    timestamps: true
})

const Client = model<IClient>('Client', ClientSchema)

export default Client
