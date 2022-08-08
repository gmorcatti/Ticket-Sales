import { generateId, randomIntNumber } from '~mocks/helpers/numbers'
import { Ticket, CreateTicket, EventId, TicketStatus } from '~shared/config/types'

export const createMockTicket = (eventId: EventId, overrides?: Partial<Ticket>): Ticket => {
  const now = new Date()

  return {
    id: generateId(),
    event: eventId,
    paidValue: randomIntNumber(200),
    person: `MockPerson ${randomIntNumber()}`,
    status: TicketStatus.CONFIRMED,
    details: `Mock Details ${randomIntNumber()}`,
    createdAt: now,
    updatedAt: now,
    ...overrides,
  }
}

export const createMockInsertTicket = (eventId: EventId, overrides?: Partial<CreateTicket>): CreateTicket => ({
  event: eventId,
  paidValue: randomIntNumber(200),
  person: `MockPerson ${randomIntNumber()}`,
  status: TicketStatus.CONFIRMED,
  details: `Mock Details ${randomIntNumber()}`,
  ...overrides,
})
