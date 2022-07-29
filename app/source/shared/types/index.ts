export type EventId = string

export type Event = {
  id: EventId,
  name: string,
  capacity: number,
  date: Date,
  created_at: Date,
  updated_at: Date,
}

export type CreateEvent = Omit<Event, 'id' | 'created_at' | 'updated_at'>
