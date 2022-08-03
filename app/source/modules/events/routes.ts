import { Router } from 'express'

import { eventsContainer } from './container'

import { CreateEventController } from './controllers'

import { validateBody } from '~source/shared/middlewares/validateBody'
import { eventSchema } from '~source/shared/validations/event'

const routes = Router()

const createEventController = eventsContainer.resolve<CreateEventController>(
  CreateEventController,
)

routes.post('/', validateBody(eventSchema), createEventController.handle)

export default routes
