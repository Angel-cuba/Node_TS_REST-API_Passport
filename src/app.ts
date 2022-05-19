import express from 'express';
import morgan from 'morgan'
import cors from 'cors'
import 'dotenv/config';
import authRoutes from './routes/auth.routes'

//initializations
const app = express()

//settings
app.set('port', process.env.PORT  || 4000)

//middlewares
app.use(morgan('dev'))
app.use(cors())
app.use(express.json())


//routes
app.get('/', (req, res) => {
    res.send('Hello World')
})
app.use(authRoutes)


export default app