import { container } from 'tsyringe'

import { IEventsRepository } from '~source/modules/events/repositories/IEventsRepository'

import { EventsRepositoryInMemory } from '~source/modules/events/repositories/implementatios/EventsRepositoryInMemory'
import { CreateEventService } from '~source/modules/events/services/CreateEvents.service'

const eventsTestContainer = container.createChildContainer()

eventsTestContainer.registerSingleton<IEventsRepository>('EventsRepository', EventsRepositoryInMemory)

eventsTestContainer.registerSingleton<CreateEventService>('CreateEventService', CreateEventService)

export { eventsTestContainer }
