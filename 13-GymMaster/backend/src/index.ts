import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import clientRoutes from './routes/clientRoutes'
import connectDB from './config/db'

connectDB()

const PORT = process.env.PORT || 4000
const app = express()

app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/clients', clientRoutes)

app.listen(PORT, () => {
    console.log(`Server running on: http://localhost:${PORT}/`);
})
