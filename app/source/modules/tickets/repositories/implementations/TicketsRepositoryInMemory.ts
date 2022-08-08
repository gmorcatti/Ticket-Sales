import { orderBy } from 'lodash'
import { randomUUID } from 'node:crypto'

import { ITicketRepository } from '../ITicketsRepository'

import { CreateTicket, Ticket, TicketId, TicketStatus } from '~source/shared/config/types'

const createTicket = (ticket: CreateTicket): Ticket => {
  const now = new Date()

  return {
    ...ticket,
    id: randomUUID(),
    createdAt: now,
    updatedAt: now,
  }
}

export class TicketRepositoryInMemory implements ITicketRepository {
  data: Map<TicketId, Ticket> = new Map()

  async getById (id: string): Promise<Ticket | null> {
    return this.data.get(id) ?? null
  }

  async getAll (): Promise<Ticket[]> {
    const tickets = Array.from(this.data.values())
    return orderBy(tickets, 'createdAt', 'desc')
  }

  async create (ticketToCreate: CreateTicket): Promise<TicketId> {
    const ticket = createTicket(ticketToCreate)

    this.data.set(ticket.id, ticket)

    return ticket.id
  }

  async remove (ticketId: TicketId): Promise<void> {
    const oldTicketValue = this.data.get(ticketId)

    if (!oldTicketValue) {
      return
    }

    const newTicketValue: Ticket = {
      ...oldTicketValue,
      status: TicketStatus.CANCELED,
    }
    this.data.set(ticketId, newTicketValue)
  }
}
