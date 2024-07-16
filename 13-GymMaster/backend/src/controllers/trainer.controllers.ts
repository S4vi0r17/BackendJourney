import { Request, Response } from 'express';
// import bcrypt from 'bcrypt';
import TrainerModel from '../models/trainer.model';
import { RegisterDto } from '../dto/register.dto';
import { LoginDto } from '../dto/login.dto';
import generateJwt from '../helpers/jwt-generator.helper';

const registration = async (req: Request, res: Response) => {

    const { name, email, password }: RegisterDto = req.body

    // Duplicate users
    const trainerExist = await TrainerModel.findOne({
        email
    })

    if (trainerExist) {
        const error = new Error('User already exists')
        return res.status(400).json({
            msg: error.message
        })
    }

    try {
        const newTrainer = new TrainerModel(req.body)
        const trainerSaved = await newTrainer.save()
        res.json({
            msg: 'registration',
            body: trainerSaved
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

const confirm = async (req: Request, res: Response) => {
    const { token } = req.params

    const trainer = await TrainerModel.findOne({ token })

    if (!trainer) {
        const error = new Error('Invalid token')
        return res.status(400).json({
            msg: error.message
        })
    }

    try {
        trainer.confirmed = true
        trainer.token = null
        await trainer.save()
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

    res.json({
        msg: 'confirm',
        body: trainer
    })
}

const auth = async (req: Request, res: Response) => {
    const { email, password }: LoginDto = req.body

    const trainer = await TrainerModel.findOne({email})

    if (!trainer) {
        const error = new Error('Trainer not found')
        return res.status(404).json({
            msg: error.message
        })
    }

    if (!trainer.confirmed) {
        const error = new Error('Trainer not confirmed')
        return res.status(401).json({
            msg: error.message
        })
    }

    // if (!bcrypt.compareSync(password, trainer.password)) {
    //     const error = new Error('Invalid password')
    //     return res.status(401).json({
    //         msg: error.message
    //     })
    // }

    if (!await trainer.comparePassword(password)) {
        const error = new Error('Invalid password')
        return res.status(401).json({
            msg: error.message
        })
    }

    res.json({
        token: generateJwt(trainer.id)
    })
}

export {
    registration,
    profile,
    confirm,
    auth
}
