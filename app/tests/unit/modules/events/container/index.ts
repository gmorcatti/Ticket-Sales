import { container } from 'tsyringe'

import { IEventsRepository } from '~source/modules/events/repositories/IEventsRepository'

import { EventsRepositoryInMemory } from '~source/modules/events/repositories/implementatios/EventsRepositoryInMemory'

import { CreateEventService } from '~source/modules/events/services/CreateEvents.service'
import { GetEventByIdService } from '~source/modules/events/services/GetEventById.serive'

const eventsTestContainer = container.createChildContainer()

eventsTestContainer.registerSingleton<IEventsRepository>('EventsRepository', EventsRepositoryInMemory)

eventsTestContainer.registerSingleton<CreateEventService>('CreateEventService', CreateEventService)
eventsTestContainer.registerSingleton<GetEventByIdService>('GetEventByIdService', GetEventByIdService)

export { eventsTestContainer }
