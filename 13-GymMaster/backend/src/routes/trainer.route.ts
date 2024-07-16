import { Router } from 'express'
import { registration, profile, confirm, auth } from '../controllers/trainer.controllers'
import checkAuth from '../middleware/auth.middleware'

const router = Router()

router.post('/', registration)
router.get('/confirm/:token', confirm)
router.post('/login', auth)

router.get('/profile', checkAuth, profile)

export default router
