import { Router } from 'express'
import { addClient, deleteClient, getClient, getClients, updateClient } from '../controllers/client.controller'
import checkAuth from '../middleware/auth.middleware'

const router = Router()

router.route('/')
    .post(checkAuth, addClient)
    .get(checkAuth, getClients)

router.route('/:id')
    .get(checkAuth, getClient)
    .put(checkAuth, updateClient)
    .delete(checkAuth, deleteClient)

export default router
