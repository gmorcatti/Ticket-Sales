import { Router } from 'express'

import { eventsContainer } from './container'

import { CreateEventController } from './controllers'

import { validateRequest, ParamType } from '~source/shared/middlewares/validateRequest'
import { eventSchema, eventIdSchema } from '~source/shared/validations/event'

const routes = Router()

const createEventController = eventsContainer.resolve<CreateEventController>(
  CreateEventController,
)

routes.post(
  '/',
  validateRequest(ParamType.BODY, eventSchema),
  createEventController.handle,
)

export default routes
