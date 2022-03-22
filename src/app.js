import express from 'express'
import cors from "cors"

import users from "./routes/users.js"
import morgan from 'morgan'

const app = express()

app.use(cors())
app.use(express.json())
app.use(morgan("dev"))

app.use('/api/v1', users)

export default app