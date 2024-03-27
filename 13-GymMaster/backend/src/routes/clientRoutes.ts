import { Router } from 'express'
import { register, profile } from '../controllers/clientControllers'

const router = Router()

router.get('/', register)
router.get('/profile', profile)

export default router
