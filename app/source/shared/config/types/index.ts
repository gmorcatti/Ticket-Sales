/**
 * Event Types
 */

export type EventId = string

export type Event = {
  id: EventId,
  name: string,
  capacity: number,
  ticketValue: number,
  date: Date,
  createdAt: Date,
  updatedAt: Date,
}

export type CreateEvent = Omit<Event, 'id' | 'createdAt' | 'updatedAt'>

/**
 * Ticket Types
 */

export type TicketId = string

export enum TicketStatus {
  RESERVED = 'reserved',
  CONFIRMED = 'confirmed',
  CANCELED = 'canceled',
}

export type Ticket = {
  id: TicketId,
  person: PersonName,
  paidValue: number,
  status: TicketStatus,
  details: string,
  event: EventId,
  createdAt: Date,
  updatedAt: Date,
}

export type CreateTicket = Omit<Ticket, 'id' | 'createdAt' | 'updatedAt'>

/**
 * Person Types
 */

export type PersonName = string

/*
* RabbitMQ Types
*/
export enum ExchangeType {
  DIRECT = 'direct',
  FANOUT = 'fanout',
  HEADERS = 'headers',
  TOPIC = 'topic',
}
