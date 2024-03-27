import { Request, Response } from 'express';

const register = (req: Request, res: Response) => {
    res.send('hola')
}

const profile = (req: Request, res: Response) => {
    res.send('profile')
}

export {
    register,
    profile
}
