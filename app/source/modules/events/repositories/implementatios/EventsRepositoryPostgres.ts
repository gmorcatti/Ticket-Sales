
import { PrismaClient } from '@prisma/client'

import { IEventsRepository } from '../IEventsRepository'

import { CreateEvent, Event, EventId } from '~source/shared/types'

export class EventsRepositoryPostgres implements IEventsRepository {
  private prisma: PrismaClient

  constructor () {
    this.prisma = new PrismaClient()
  }

  getById (id: EventId): Promise<Event | undefined> {
    throw new Error('Method not implemented.')
  }

  getAll (): Promise<Event[]> {
    throw new Error('Method not implemented.')
  }

  async create (event: CreateEvent): Promise<EventId> {
    const { id } = await this.prisma.event.create({
      data: event,
      select: {
        id: true,
      },
    })

    return id
  }
}
