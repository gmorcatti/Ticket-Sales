import { NextFunction, Request, Response } from 'express'
import Joi from 'joi'

import { AppError } from '../errors/AppError'

export enum ParamType {
  BODY = 'body',
  PARAMS = 'params',
  QUERY = 'query',
}

export const validateRequest = (paramType: ParamType, schema: Joi.Schema) => async (req: Request, _: Response, next: NextFunction) => {
  try {
    await schema.validateAsync(req[paramType])
    next()
  } catch (error) {
    if (error instanceof Joi.ValidationError) {
      throw new AppError(error.message.replace(/"/g, "'"))
    }

    throw error
  }
}
