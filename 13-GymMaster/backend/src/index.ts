import express from 'express'
import connectDB from './config/db'

connectDB()

const PORT = process.env.PORT || 4000
const app = express()

app.use('/', (req, res) => {
    res.send('Hi!!!')
})

app.listen(PORT, () => {
    console.log(`Server running on: http://localhost:${PORT}/`);
})
