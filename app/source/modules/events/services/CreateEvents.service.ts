import { inject, injectable } from 'tsyringe'

import { IEventsRepository } from '../repositories/IEventsRepository'

import { AppError } from '~source/shared/config/errors/AppError'
import { CreateEvent } from '~source/shared/config/types'

@injectable()
export class CreateEventService {
  constructor (@inject('EventsRepository') private eventsRepository: IEventsRepository) {}

  async execute (event: CreateEvent) {
    if (!event.name) {
      throw new AppError('Event name was not informed')
    }

    if (!event.capacity) {
      throw new AppError('Event capacity was not informed')
    }

    if (!event.date) {
      throw new AppError('Event date was not informed')
    }

    return this.eventsRepository.create(event)
  }
}
