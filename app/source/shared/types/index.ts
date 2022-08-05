/**
 * Event Types
 */

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

/**
 * Ticket Types
 */

export type TicketId = string

export type Ticket = {
  id: TicketId,
  person: PersonName,
  paidValue: number,
  event: EventId,
  createdAt: Date,
  updatedAt: Date,
}

export type CreateTicket = Omit<Ticket, 'id' | 'createdAt' | 'updatedAt'>

/**
 * Person Types
 */

export type PersonName = string
