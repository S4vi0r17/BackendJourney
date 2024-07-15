import { Router } from 'express'
import { registration, profile, confirm } from '../controllers/trainer.controllers'

const router = Router()

router.post('/', registration)
router.get('/profile', profile)
router.get('/confirm', confirm)

export default router
