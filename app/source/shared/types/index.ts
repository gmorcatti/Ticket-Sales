export type EventId = string

export type Event = {
  id: EventId,
  name: string,
  capacity: number,
  date: Date,
  createdAt: Date,
  updatedAt: Date,
}

export type CreateEvent = Omit<Event, 'id' | 'createdAt' | 'updatedAt'>
