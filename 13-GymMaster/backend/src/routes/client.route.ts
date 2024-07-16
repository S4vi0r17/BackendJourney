import { Router } from 'express'
import { addClient, getClients } from '../controllers/client.controller'
import checkAuth from '../middleware/auth.middleware'

const router = Router()

router.route('/').post(checkAuth, addClient).get(checkAuth, getClients)

export default router
