import { Request, Response } from "express"
import Client, { ExerciseLevel } from "../models/client.model"
import { UpdateClientDto } from "../dto/update-client.dto"

const addClient = async (req: Request, res: Response) => {
    try {
        const client = new Client(req.body)
        client.trainer = res.locals.trainer._id
        await client.save()
        res.status(201).send(client)
    } catch (error) {
        res.status(400).send(error)
    }
}

const getClients = async (req: Request, res: Response) => {
    try {
        const clients = await Client.find().where('trainer').equals(res.locals.trainer._id)
        res.status(200).send(clients)
    } catch (error) {
        res.status(500).send(error)
    }
}

const getClient = async (req: Request, res: Response) => {
    const { id } = req.params
    const client = await Client.findById(id)

    if (!client) {
        return res.status(404).send({ message: 'Client not found' })
    }

    if (client?.trainer.toString() !== res.locals.trainer._id.toString()) {
        return res.status(403).send({ message: 'Forbidden' })
    }

    res.status(200).json(client)
}

const updateClient = async (req: Request, res: Response) => {
    const { id } = req.params
    const updates: UpdateClientDto = req.body
    const client = await Client.findById(id)

    if (!client) {
        return res.status(404).send({ message: 'Client not found' })
    }

    if (client?.trainer.toString() !== res.locals.trainer._id.toString()) {
        return res.status(403).send({ message: 'Forbidden' })
    }

    client.name = updates.name ?? client.name;
    client.email = updates.email ?? client.email;
    client.phone = updates.phone ?? client.phone;
    client.weight = updates.weight ?? client.weight;
    client.height = updates.height ?? client.height;
    client.exerciseLevel = (updates.exerciseLevel as ExerciseLevel) ?? client.exerciseLevel;
    client.note = updates.note ?? client.note;
    

    await client.save()
    res.status(200).json({
        msm: 'Client updated'
    })
}

const deleteClient = async (req: Request, res: Response) => {
    const { id } = req.params
    const client = await Client.findById(id)

    if (!client) {
        return res.status(404).send({ message: 'Client not found' })
    }

    if (client?.trainer.toString() !== res.locals.trainer._id.toString()) {
        return res.status(403).send({ message: 'Forbidden' })
    }

    try {
        await client.deleteOne()
        res.status(200).json({
            message: 'Client deleted'
        })
    } catch (error) {
        res.status(500).send(error)
    }
}

export {
    addClient,
    getClients,
    getClient,
    updateClient,
    deleteClient
}
