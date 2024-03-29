import { Router } from 'express'
import { registration, profile } from '../controllers/clientControllers'

const router = Router()

router.post('/', registration)
router.get('/profile', profile)

export default router
