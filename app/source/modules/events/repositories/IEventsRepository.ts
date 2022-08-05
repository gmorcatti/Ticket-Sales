import { CreateEvent, Event, EventId } from '~shared/config/types'

export interface IEventsRepository {
  getById(id: EventId): Promise<Event | null>
  getAll(): Promise<Event[]>
  create(event: CreateEvent): Promise<EventId>
}
