import { Router } from 'express'
import { registration, profile, confirm, auth } from '../controllers/trainer.controllers'

const router = Router()

router.post('/', registration)
router.get('/confirm/:token', confirm)
router.post('/login', auth)

router.get('/profile', profile)

export default router
