import express from 'express'
import UserController from './controllers/UserController'
import SessionController from './controllers/SessionController'
import PostController from './controllers/PostController'
import authMiddleware from './middlewares/authentication'

const routes = express.Router()

routes.post('/users', UserController.store)
routes.post('/auth', SessionController.store)

routes.use(authMiddleware)

routes.put('/users', UserController.update)
routes.delete('/users', UserController.delete)
routes.post('/posts', PostController.store)
routes.get('/posts', PostController.indexAll)
routes.get('/posts/:user_id', PostController.index)
routes.get('/:post_id/posts', PostController.show)
routes.delete('/:post_id/posts', PostController.delete)

export default routes
