import { container } from 'tsyringe'

import { IEventsRepository } from '~source/modules/events/repositories/IEventsRepository'

import { EventsRepositoryPostgres } from '~source/modules/events/repositories/implementatios/EventsRepositoryPostgres'
import { CreateEventService } from '~source/modules/events/services/CreateEvents.service'

const eventsContainer = container.createChildContainer()

eventsContainer.registerSingleton<IEventsRepository>('EventsRepository', EventsRepositoryPostgres)

eventsContainer.registerSingleton<CreateEventService>('CreateEventService', CreateEventService)

export { eventsContainer }
