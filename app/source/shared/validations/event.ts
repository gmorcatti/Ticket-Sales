import Joi from 'joi'

import { CreateEvent } from '../types'

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
