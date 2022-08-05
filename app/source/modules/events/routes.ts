import { Router } from 'express'

import { eventsContainer } from './container'

import { CreateEventController, GetEventByIdController } from './controllers'

import { eventIdSchema, eventSchema } from './validations'

import { validateRequest, ParamType } from '~source/shared/middlewares/validateRequest'

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
