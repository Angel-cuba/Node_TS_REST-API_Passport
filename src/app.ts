import express from 'express';
import morgan from 'morgan'
import cors from 'cors'
import 'dotenv/config';
import passport from 'passport';
import passportMiddleware from './middlewares/passport';

import authRoutes from './routes/auth.routes'
import privateRoutes from './routes/private.routes'

//initializations
const app = express()

//settings
app.set('port', process.env.PORT  || 4000)

//middlewares
app.use(morgan('dev'))
app.use(cors())
app.use(express.json())

//Including passport as middlewares
app.use(passport.initialize())
passport.use(passportMiddleware)


//routes
app.get('/', (req, res) => {
    res.send('Hello World')
})
app.use(authRoutes)
app.use(privateRoutes)


export default app