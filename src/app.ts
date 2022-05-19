import express from 'express';
import morgan from 'morgan'
import cors from 'cors'

//initializations
const app = express()

//settings
app.set('port', process.env.PORT || 3001)

//middlewares
app.use(morgan('dev'))
app.use(cors())
app.use(express.json())


//routes
app.get('/', (req, res) => {
    res.send('Hello World')
})

export default app