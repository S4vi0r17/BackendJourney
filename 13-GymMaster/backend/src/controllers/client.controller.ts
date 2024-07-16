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

export { addClient, getClients }
