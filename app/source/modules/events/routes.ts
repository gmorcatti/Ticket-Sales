import { Router } from 'express'

import { eventsContainer } from './container'

import { CreateEventController } from './controllers'

const routes = Router()

const createEventController = eventsContainer.resolve<CreateEventController>(
  CreateEventController,
)

routes.post('/', createEventController.handle)

export default routes
