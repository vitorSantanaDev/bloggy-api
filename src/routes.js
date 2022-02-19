import express from 'express'
import { storeUser } from './controllers/UserController'

const routes = express.Router()

routes.post('/users', storeUser)

export default routes
