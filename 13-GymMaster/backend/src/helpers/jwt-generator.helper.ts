import jwt from 'jsonwebtoken'

const generateJwt = (trainer: TrainerInterface): string => {
    return jwt.sign({
        trainer
    }, process.env.JWT_SECRET as string, {
        expiresIn: '30d'
    })
}

export default generateJwt
