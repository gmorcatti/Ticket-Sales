import { inject, injectable } from 'tsyringe'

import { IEventsRepository } from '../repositories/IEventsRepository'

import { AppError } from '~source/shared/errors/AppError'
import { EventId } from '~source/shared/types'

@injectable()
export class GetEventByIdService {
  constructor (@inject('EventsRepository') private eventsRepository: IEventsRepository) {}

  async execute (id: EventId) {
    if (!id) {
      throw new AppError('Id was not informed')
    }

    const event = await this.eventsRepository.getById(id)

    if (!event) {
      throw new AppError('Event not found', 404)
    }

    return event
  }
}
