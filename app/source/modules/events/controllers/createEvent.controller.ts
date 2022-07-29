import { Request, Response } from 'express'
import { inject, injectable } from 'tsyringe'

import { CreateEventService } from '../services/CreateEvents.service'

@injectable()
export class CreateEventController {
  constructor (
    @inject('CreateEventService') private createEvent: CreateEventService,
  ) {}

  handle = async (req: Request, res: Response) => {
    const { name, capacity, date } = req.body

    await this.createEvent.execute({
      name,
      capacity,
      date,
    })

    return res.sendStatus(200)
  }
}
