import { inject, injectable } from 'tsyringe'

import { IEventsRepository } from '../repositories/IEventsRepository'

import { AppError } from '~source/shared/errors/AppError'
import { CreateEvent } from '~source/shared/types'

@injectable()
export class CreateEventService {
  constructor (@inject('EventsRepository') private eventsRepository: IEventsRepository) {}

  async execute (event: CreateEvent) {
    if (!event) {
      throw new AppError('Event was not informed')
    }

    return this.eventsRepository.create(event)
  }
}
