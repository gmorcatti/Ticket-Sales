import { CreateTicket, Ticket, TicketId } from '~shared/types'

export interface ITicketRepository {
  getById(id: TicketId): Promise<Ticket | null>
  getAll(): Promise<Ticket[]>
  create(ticket: CreateTicket): Promise<TicketId>
}
