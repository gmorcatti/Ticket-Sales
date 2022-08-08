
import { getNowMinusDays } from '~mocks/helpers/date'
import { generateId, randomIntNumber } from '~mocks/helpers/numbers'
import { Event, CreateEvent } from '~shared/config/types'

export const createMockEvent = (overrides?: Partial<Event>): Event => {
  const now = new Date()

  return {
    id: generateId(),
    name: `MockName ${randomIntNumber()}`,
    capacity: randomIntNumber(300),
    ticketValue: randomIntNumber(200),
    date: getNowMinusDays(3),
    createdAt: now,
    updatedAt: now,
    ...overrides,
  }
}

export const createMockInsertEvent = (overrides?: Partial<CreateEvent>): CreateEvent => ({
  name: `MockName ${randomIntNumber()}`,
  capacity: randomIntNumber(300),
  date: getNowMinusDays(3),
  ticketValue: randomIntNumber(200),
  ...overrides,
})
