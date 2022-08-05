import Joi from 'joi'

import { CreateEvent, EventId } from '~source/shared/config/types'

export const eventSchema = Joi.object<CreateEvent>({
  name: Joi.string().required().messages({
    'any.required': '"name" não informado',
  }),
  capacity: Joi.number().min(1).required().messages({
    'any.required': '"capacity" não informado',
  }),
  date: Joi.date().required().messages({
    'any.required': '"date" não informado',
  }),
})

export const eventIdSchema = Joi.object<{id: EventId}>({
  id: Joi.string().guid().required().messages({
    'string.guid': '"id" precisa ser um UUID válido',
    'any.required': '"id" não informado',
  }),
})
