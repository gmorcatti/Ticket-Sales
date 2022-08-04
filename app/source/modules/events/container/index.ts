import { container } from 'tsyringe'

import { GetEventByIdService } from '../services/GetEventById.serive'

import { IEventsRepository } from '~source/modules/events/repositories/IEventsRepository'

import { EventsRepositoryPostgres } from '~source/modules/events/repositories/implementatios/EventsRepositoryPostgres'
import { CreateEventService } from '~source/modules/events/services/CreateEvents.service'

const eventsContainer = container.createChildContainer()

eventsContainer.registerSingleton<IEventsRepository>('EventsRepository', EventsRepositoryPostgres)

eventsContainer.registerSingleton<CreateEventService>('CreateEventService', CreateEventService)
eventsContainer.registerSingleton<GetEventByIdService>('GetEventByIdService', GetEventByIdService)

export { eventsContainer }
