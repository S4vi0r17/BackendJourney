import { Request, Response } from 'express'
import Guitar from '../models/guitar.model'

const products = async (req: Request, res: Response) => {

    const guitars = await Guitar.findAll()

    res.render('products', {
        guitars
    })
}

export default products;
