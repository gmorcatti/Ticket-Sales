import 'reflect-metadata'
import { eventsTestContainer } from '../container'

import { createMockInsertEvent } from "~mocks/events"
import { CreateEventService } from "~source/modules/events/services/CreateEvents.service"
import { IEventsRepository } from '~source/modules/events/repositories/IEventsRepository'

describe('Unit Tests', () => {
  describe('CreateEvent Service', () => {
    const service = eventsTestContainer.resolve<CreateEventService>('CreateEventService')
    const repository = eventsTestContainer.resolve<IEventsRepository>('EventsRepository')

    it('Should insert an event', async () => {
      const eventToInsert = createMockInsertEvent()

      const id = await service.execute(eventToInsert)
      
      const event = await repository.getById(id)

      expect(event?.name).toEqual(eventToInsert.name)
      expect(event?.date).toEqual(eventToInsert.date)
      expect(event?.capacity).toEqual(eventToInsert.capacity)
    })

    it('Should not insert an event if NAME was not informed', async () => {
      // @ts-ignore
      await expect(() => service.execute({
        capacity: 300, date: new Date()
      })).rejects.toThrow('Event name was not informed')
    })

    it('Should not insert an event if CAPACITY was not informed', async () => {
      // @ts-ignore
      await expect(() => service.execute({
        name: 'Event Name', date: new Date()
      })).rejects.toThrow('Event capacity was not informed')
    })
    
    it('Should not insert an event if DATE was not informed', async () => {
      // @ts-ignore
      await expect(() => service.execute({
        name: 'Event Name', capacity: 300
      })).rejects.toThrow('Event date was not informed')
    })
  })
})
