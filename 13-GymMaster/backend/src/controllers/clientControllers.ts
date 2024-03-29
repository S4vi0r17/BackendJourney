import { Request, Response } from 'express';

const registration = (req: Request, res: Response) => {
    res.json({
        msg: 'registration'
    })
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
