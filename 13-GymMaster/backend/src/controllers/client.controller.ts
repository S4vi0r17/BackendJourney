import { Request, Response } from "express"
import Client from "../models/client.model"

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
    console.log(client)

    if (client?.trainer.toString() !== res.locals.trainer._id.toString()) {
        return res.status(403).send({ message: 'Forbidden' })
    }

    if (!client) {
        return res.status(404).send({ message: 'Client not found' })
    }

    res.status(200).json(client)
}

const updateClient = async (req: Request, res: Response) => {
    res.json({ message: 'updateClient' })
}

const deleteClient = async (req: Request, res: Response) => {
    res.json({ message: 'deleteClient' })
}

export {
    addClient,
    getClients,
    getClient,
    updateClient,
    deleteClient
}
