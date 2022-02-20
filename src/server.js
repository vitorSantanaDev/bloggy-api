import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'

import routes from './routes'

dotenv.config()

const server = express()
const port = process.env.PORT || 3000

mongoose.connect(
  `mongodb+srv://vsantana:${process.env.DATABASE_PASSWORD}@bloggy.jtv04.mongodb.net/${process.env.DATABASE_NAME}?retryWrites=true&w=majority`,
  { useNewUrlParser: true, useUnifiedTopology: true }
)

server.use(express.json())
server.use(routes)

server.listen(port, () => {
  console.log(`API is running on http://localhost: ${port}`)
})
