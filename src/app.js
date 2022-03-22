import express from 'express'

import users from "./routes/users.js"

const app = express()

app.use('/api/v1', users)

export default app