import { Request, Response } from 'express'
import { inject, injectable } from 'tsyringe'

import { CreateEventService } from '../services/CreateEvents.service'

@injectable()
export class CreateEventController {
  constructor (
    @inject('CreateEventService') private createEvent: CreateEventService,
  ) {}

  handle = async (req: Request, res: Response) => {
    const { name, lotation, date } = req.body

    await this.createEvent.execute({
      name,
      lotation,
      date,
    })

    return res.sendStatus(200)
  }
}
