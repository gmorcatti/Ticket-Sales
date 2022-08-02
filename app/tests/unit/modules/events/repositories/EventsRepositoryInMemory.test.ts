import { createMockEvent } from "~mocks/events"
import { EventsRepositoryInMemory } from "~source/modules/events/repositories/implementatios/EventsRepositoryInMemory"

describe('Unit Tests', () => {
  describe('EventsRepositoryInMemory', () => {
    const repository = new EventsRepositoryInMemory()
    
    describe('create', () => {
      it('should insert an event into DB', async () => {
        const eventToInsert = createMockEvent()

        const insertedId = await repository.create(eventToInsert)

        const dbEvent = await repository.getById(insertedId)

        expect(dbEvent).toBeTruthy()
        expect(dbEvent?.name).toBe(eventToInsert.name)
        expect(dbEvent?.capacity).toBe(eventToInsert.capacity)
        expect(dbEvent?.date).toBe(eventToInsert.date)
      })
    })
  })
})
