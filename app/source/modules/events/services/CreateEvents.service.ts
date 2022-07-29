import { inject, injectable } from 'tsyringe'

import { EventsRepository } from '../repositories/implementatios/EventsRepositoryInMemory'

import { AppError } from '~source/shared/errors/AppError'
import { CreateEvent } from '~source/shared/types'

@injectable()
export class CreateEventService {
  constructor (@inject('EventsRepository') private eventsRepository: EventsRepository) {}

  async execute (event: CreateEvent) {
    if (!event) {
      throw new AppError('Event was not informed')
    }

    return this.eventsRepository.create(event)
  }
}
