import { inject, injectable } from 'tsyringe'

import { EventsRepository } from '../repositories/implementatios/EventsRepositoryInMemory'

import { CreateEvent } from '~source/shared/types'
import { AppError } from '~source/shared/types/errors/AppError'

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
