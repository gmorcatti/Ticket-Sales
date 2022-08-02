import { getNowMinusDays } from '~mocks/helpers/date'
import { generateId, randomIntNumber } from '~mocks/helpers/numbers'

import { Event } from '~shared/types'

export const createMockEvent = (overrides?: Partial<Event>): Event => {
  const now = new Date()

  return {
    id: generateId(),
    name: `MockName ${randomIntNumber()}`,
    capacity: randomIntNumber(300),
    date: getNowMinusDays(3),
    createdAt: now,
    updatedAt: now,
    ...overrides,
  }
}
