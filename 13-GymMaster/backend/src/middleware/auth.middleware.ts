import { NextFunction, Request, Response } from "express"
import jwt from 'jsonwebtoken'
import Trainer from "../models/trainer.model"

const checkAuth = async (req: Request, res: Response, next: NextFunction) => {

    let token = req.headers['authorization'] as string
    
    if (!token) {
        return res.status(401).json({
            msg: 'No token, authorization denied'
        })
    }

    if (token && token.startsWith('Bearer')) {
        token = token.split(' ')[1]
    }


    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET as string) as JwtPayload
        res.locals.trainer = await Trainer.findById(decoded.id).select('-password -confirmed -token')
        next()
    } catch (error) {
        res.status(400).json({
            msg: 'Token is not valid'
        })
    }
}

export default checkAuth
