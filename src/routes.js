import express from 'express'

const routes = express.Router()

routes.get('/', (resquest, response) => {
  response.status(200).json({ message: 'Hello Vitor' })
})

export default routes
