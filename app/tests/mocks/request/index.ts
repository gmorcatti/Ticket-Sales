import { Request, Response } from 'express'

export const mockRequest = ({ body, params, query }: Partial<Request>) => ({
  body,
  params,
  query,
} as Request)

export function mockResponse () {
  return {
    statusCode: 200,
    sendStatus: function (status: number) {
      this.statusCode = status
      return this
    },
    status: function (status: number) {
      this.statusCode = status
      return this
    },
    send: function () {
      return this
    },
  } as Response
}
