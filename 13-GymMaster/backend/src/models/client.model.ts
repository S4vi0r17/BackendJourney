import { Document, Schema, model } from 'mongoose'

export interface IClient extends Document {
    name: string
    email: string
    phone: string
}

const ClientSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    weight: { type: Number, required: true },
    height: { type: Number, required: true },
    trainer: { type: Schema.Types.ObjectId, ref: 'Trainer' }
}, {
    timestamps: true
})

const Client = model<IClient>('Client', ClientSchema)

export default Client
