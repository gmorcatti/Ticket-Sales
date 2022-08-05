
import { PrismaClient } from '@prisma/client'

import { IEventsRepository } from '../IEventsRepository'

import { CreateEvent, Event, EventId } from '~source/shared/config/types'

export class EventsRepositoryPostgres implements IEventsRepository {
  private prisma: PrismaClient

  constructor () {
    this.prisma = new PrismaClient()
  }

  async getById (id: EventId): Promise<Event | null> {
    const event = await this.prisma.event.findUnique({
      where: { id },
    })

    return event
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
