import { randomUUID } from 'node:crypto'

import { IEventsRepository } from '../IEventsRepository'

import { CreateEvent, Event, EventId } from '~source/shared/types'

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

  async getById (id: EventId): Promise<Event | undefined> {
    return this.data.get(id)
  }

  async getAll (): Promise<Event[]> {
    return Array.from(this.data.values())
  }

  async create (eventToCreate: CreateEvent): Promise<EventId> {
    const event = createEvent(eventToCreate)

    this.data.set(event.id, event)

    return event.id
  }
}
