import { createMockEvent } from "~mocks/events"
import { EventsRepositoryInMemory } from "~source/modules/events/repositories/implementatios/EventsRepositoryInMemory"
import { EventId } from "~source/shared/types"

describe('Unit Tests', () => {
  describe('EventsRepositoryInMemory', () => {    
    describe('create', () => {
      it('should insert an event into DB', async () => {
        const repository = new EventsRepositoryInMemory()

        const eventToInsert = createMockEvent()

        const insertedId = await repository.create(eventToInsert)

        const dbEvent = await repository.getById(insertedId)

        expect(dbEvent).toBeTruthy()
        expect(dbEvent?.name).toBe(eventToInsert.name)
        expect(dbEvent?.capacity).toBe(eventToInsert.capacity)
        expect(dbEvent?.date).toBe(eventToInsert.date)
      })
    })

    describe('getById', () => {
      const repository = new EventsRepositoryInMemory()

      const event = createMockEvent()
      let insertedId: EventId

      beforeAll(async () => {
        insertedId = await repository.create(event)
      })

      it('should get a event from DB', async () => {
        const dbEvent = await repository.getById(insertedId)

        expect(dbEvent).toBeTruthy()
        expect(dbEvent?.name).toBe(event.name)
        expect(dbEvent?.capacity).toBe(event.capacity)
        expect(dbEvent?.date).toBe(event.date)
      })
    })

    describe('getAll', () => {
      const repository = new EventsRepositoryInMemory()

      const event1 = createMockEvent()
      const event2 = createMockEvent()
      const event3 = createMockEvent()

      let insertedId1: EventId
      let insertedId2: EventId
      let insertedId3: EventId

      beforeAll(async () => {
        insertedId1 = await repository.create(event1)
        insertedId2 = await repository.create(event2)
        insertedId3 = await repository.create(event3)
      })

      it('should get a event from DB', async () => {
        const events = await repository.getAll()

        expect(events).toHaveLength(3)
        expect(events[0].id).toBe(insertedId1)
        expect(events[1].id).toBe(insertedId2)
        expect(events[2].id).toBe(insertedId3)
      })
    })
  })
})
