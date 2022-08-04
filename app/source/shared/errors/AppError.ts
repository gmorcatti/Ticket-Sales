export class AppError extends Error {
  statusCode: number
  details: object | undefined

  constructor (message: string, statusCode = 400, details?: object) {
    super(message)

    this.message = message
    this.statusCode = statusCode
    this.details = details
  }
}
