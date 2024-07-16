import { Router } from 'express'
import {
    registration,
    profile,
    confirm,
    auth,
    forgot,
    checkToken,
    newPassword
} from '../controllers/trainer.controllers'
import checkAuth from '../middleware/auth.middleware'

const router = Router()

router.post('/', registration)
router.get('/confirm/:token', confirm)
router.post('/login', auth)
router.post('/forgot', forgot) // Check email and send token
// router.get('/forgot/:token', checkToken) // User clicks on link in email
// router.post('/forgot/:token', newPassword) // User enters new password

// User clicks on link in email and enters new password
router.route('/forgot/:token').get(checkToken).post(newPassword)

// Protected route
router.get('/profile', checkAuth, profile)

export default router
