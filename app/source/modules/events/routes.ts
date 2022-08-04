import { Router } from 'express'

import { eventsContainer } from './container'

import { CreateEventController } from './controllers'

import { GetEventByIdController } from './controllers/getEventById.controller'

import { validateRequest, ParamType } from '~source/shared/middlewares/validateRequest'
import { eventSchema, eventIdSchema } from '~source/shared/validations/event'

const routes = Router()

const createEventController = eventsContainer.resolve<CreateEventController>(
  CreateEventController,
)

const getEventByIdController = eventsContainer.resolve<GetEventByIdController>(
  GetEventByIdController,
)

routes.post(
  '/',
  validateRequest(ParamType.BODY, eventSchema),
  createEventController.handle,
)
routes.get(
  '/:id',
  validateRequest(ParamType.PARAMS, eventIdSchema),
  getEventByIdController.handle,
)

export default routes
