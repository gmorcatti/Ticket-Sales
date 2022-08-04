import { Request, Response } from 'express'
import { inject, injectable } from 'tsyringe'

import { GetEventByIdService } from '../services/GetEventById.serive'

@injectable()
export class GetEventByIdController {
  constructor (
    @inject('GetEventByIdService') private getEventById: GetEventByIdService,
  ) {}

  handle = async (req: Request, res: Response) => {
    const { id } = req.params

    const event = await this.getEventById.execute(id)

    return res.status(200).send(event)
  }
}
