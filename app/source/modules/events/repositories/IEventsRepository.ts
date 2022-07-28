import { CreateEvent, Event, EventId } from '~shared/types'

export interface IEventsRepository {
  getById(id: EventId): Promise<Event | undefined>
  getAll(): Promise<Event[]>
  create(event: CreateEvent): Promise<void>
}
