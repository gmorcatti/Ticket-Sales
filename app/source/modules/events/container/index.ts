import { container } from 'tsyringe'

import { IEventsRepository } from '~source/modules/events/repositories/IEventsRepository'

import { EventsRepository } from '~source/modules/events/repositories/implementatios/EventsRepositoryInMemory'
import { CreateEventService } from '~source/modules/events/services/CreateEvents.service'

const eventsContainer = container.createChildContainer()

eventsContainer.registerSingleton<IEventsRepository>('EventsRepository', EventsRepository)

eventsContainer.registerSingleton<CreateEventService>('CreateEventService', CreateEventService)

export { eventsContainer }
