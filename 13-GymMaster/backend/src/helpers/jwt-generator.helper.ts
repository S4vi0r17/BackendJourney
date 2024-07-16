import jwt from 'jsonwebtoken'

const generateJwt = (id: String): string => {
    return jwt.sign({
        id
    }, process.env.JWT_SECRET as string, {
        expiresIn: '30d'
    })
}

export default generateJwt
