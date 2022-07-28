import { Router } from 'express'

import EventRoutes from './modules/events/routes'

const routes = Router()

routes.use('/event', EventRoutes)

export default routes
