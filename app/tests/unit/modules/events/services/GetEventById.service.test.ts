import 'reflect-metadata'
import { eventsTestContainer } from '../container'

import { createMockInsertEvent } from "~mocks/events"
import { IEventsRepository } from '~source/modules/events/repositories/IEventsRepository'
import { GetEventByIdService } from '~source/modules/events/services/GetEventById.service'
import { EventId } from '~source/shared/config/types'

describe('Unit Tests', () => {
  describe('GetEventById Service', () => {
    const service = eventsTestContainer.resolve<GetEventByIdService>('GetEventByIdService')
    const repository = eventsTestContainer.resolve<IEventsRepository>('EventsRepository')

    const eventToInsert1 = createMockInsertEvent()

    let event1: EventId

    beforeAll(async () => {
      event1 = await repository.create(eventToInsert1)
    })

    it('Should get an event by ID when event exist', async () => {      
      const event = await service.execute(event1)

      expect(event?.name).toEqual(eventToInsert1.name)
      expect(event?.date).toEqual(eventToInsert1.date)
      expect(event?.capacity).toEqual(eventToInsert1.capacity)
    })

    it('Should not get an event when event does not exist', async () => {      
      await expect(() => service.execute('<non-existing-id>'))
        .rejects.toThrow('Event not found')
    })
    
    it('Should not get an event when id is not informed', async () => {      
      // @ts-ignore
      await expect(() => service.execute())
        .rejects.toThrow('Id was not informed')
    })
  })
})
