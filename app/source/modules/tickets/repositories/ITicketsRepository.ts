import { CreateTicket, Ticket, TicketId } from '~shared/config/types'

export interface ITicketRepository {
  getById(id: TicketId): Promise<Ticket | null>
  getAll(): Promise<Ticket[]>
  create(ticket: CreateTicket): Promise<TicketId>
  remove(ticketId: TicketId): Promise<void>
}
