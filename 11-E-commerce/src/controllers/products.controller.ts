import { Request, Response } from 'express'
import Guitar from '../models/guitar.model'
import Blog from '../models/blog.model'

const products = async (req: Request, res: Response) => {

    const guitars = await Guitar.findAll()

    res.render('products', {
        guitars
    })
}

const blogs = async (req: Request, res: Response) => {
    const blogs = await Blog.findAll()

    res.render('blog', {
        blogs
    })
}

export { products, blogs };
