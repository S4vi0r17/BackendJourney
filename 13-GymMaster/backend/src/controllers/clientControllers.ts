import { Request, Response } from 'express';
import { RegisterDto } from '../dto/RegisterDTO';
import Client from '../models/ClientModel';

const registration = async (req: Request, res: Response) => {

    const { name, email, password }: RegisterDto = req.body

    // Duplicate users
    const userExist = await Client.findOne({
        email
    })

    if (userExist) {
        const error = new Error('User already exists')
        return res.status(400).json({
            msg: error.message
        })
    }

    try {
        const client = new Client(req.body)
        const clientSaved = await client.save()
        res.json({
            msg: 'registration',
            body: clientSaved
        })
    } catch (error) {
        if (error instanceof Error) {
            res.status(500).json({
                msg: error.message
            })
        } else {
            res.status(500).json({
                msg: 'Caught an unexpected error'
            })
        }
    }
}

const profile = (req: Request, res: Response) => {
    res.json({
        msg: 'profile'
    })
}
export {
    registration,
    profile
}
