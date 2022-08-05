import { orderBy } from 'lodash'
import { randomUUID } from 'node:crypto'

import { IEventsRepository } from '../IEventsRepository'

import { CreateEvent, Event, EventId } from '~source/shared/config/types'

const createEvent = (event: CreateEvent): Event => {
  const now = new Date()

  return {
    ...event,
    id: randomUUID(),
    createdAt: now,
    updatedAt: now,
  }
}

export class EventsRepositoryInMemory implements IEventsRepository {
  data: Map<EventId, Event> = new Map()

  async getById (id: EventId): Promise<Event | null> {
    return this.data.get(id) ?? null
  }

  async getAll (): Promise<Event[]> {
    const events = Array.from(this.data.values())
    return orderBy(events, 'createdAt', 'desc')
  }

  async create (eventToCreate: CreateEvent): Promise<EventId> {
    const event = createEvent(eventToCreate)

    this.data.set(event.id, event)

    return event.id
  }
}
