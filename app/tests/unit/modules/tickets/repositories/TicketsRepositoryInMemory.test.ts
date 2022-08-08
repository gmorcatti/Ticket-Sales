import { createMockInsertTicket } from "~mocks/tickets"
import { TicketRepositoryInMemory } from "~source/modules/tickets/repositories/implementations/TicketsRepositoryInMemory"
import { EventId, TicketId, TicketStatus } from "~source/shared/config/types"

describe('Unit Tests', () => {
  describe('TicketsRepositoryInMemory', () => {

    const eventId: EventId = '<fake-event-id>';
    
    describe('create', () => {
      it('should insert an ticket into DB', async () => {
        const repository = new TicketRepositoryInMemory()

        const ticketToInsert = createMockInsertTicket(eventId)

        const insertedId = await repository.create(ticketToInsert)

        const dbTicket = await repository.getById(insertedId)

        expect(dbTicket).toBeTruthy()
        expect(dbTicket?.person).toBe(ticketToInsert.person)
        expect(dbTicket?.status).toBe(ticketToInsert.status)
        expect(dbTicket?.paidValue).toBe(ticketToInsert.paidValue)
        expect(dbTicket?.event).toBe(ticketToInsert.event)
        expect(dbTicket?.details).toBe(ticketToInsert.details)
      })
    })

    describe('getById', () => {
      const repository = new TicketRepositoryInMemory()

      const ticketToInsert = createMockInsertTicket(eventId)

      let insertedId: TicketId

      beforeAll(async () => {
        insertedId = await repository.create(ticketToInsert)
      })

      it('should get a ticket from DB', async () => {
        const dbTicket = await repository.getById(insertedId)

        expect(dbTicket).toBeTruthy()
        expect(dbTicket?.person).toBe(ticketToInsert.person)
        expect(dbTicket?.status).toBe(ticketToInsert.status)
        expect(dbTicket?.paidValue).toBe(ticketToInsert.paidValue)
        expect(dbTicket?.event).toBe(ticketToInsert.event)
        expect(dbTicket?.details).toBe(ticketToInsert.details)
      })

      it('should not get a ticket from DB if ID is not informed', async () => {
        // @ts-ignore
        const dbTicket = await repository.getById(undefined)
        
        expect(dbTicket).toBeFalsy()
      })
    })

    describe('getAll', () => {
      const repository = new TicketRepositoryInMemory()

      const ticket1 = createMockInsertTicket(eventId)
      const ticket2 = createMockInsertTicket(eventId)
      const ticket3 = createMockInsertTicket(eventId)

      let insertedId1: EventId
      let insertedId2: EventId
      let insertedId3: EventId

      beforeAll(async () => {
        insertedId1 = await repository.create(ticket1)
        insertedId2 = await repository.create(ticket2)
        insertedId3 = await repository.create(ticket3)
      })

      it('should get all tickets from DB sorted by created date', async () => {
        const tickets = await repository.getAll()

        expect(tickets).toHaveLength(3)
        expect(tickets[0].id).toBe(insertedId1)
        expect(tickets[1].id).toBe(insertedId2)
        expect(tickets[2].id).toBe(insertedId3)
      })
    })

    describe('remove', () => {
      const repository = new TicketRepositoryInMemory()

      const ticket1 = createMockInsertTicket(eventId)
      const ticket2 = createMockInsertTicket(eventId)

      let insertedId1: TicketId
      let insertedId2: TicketId

      beforeAll(async () => {
        insertedId1 = await repository.create(ticket1)
        insertedId2 = await repository.create(ticket2)
      })

      it('should update some ticket status to CANCELED', async () => {
        await repository.remove(insertedId2)

        const tickets = await repository.getAll()

        expect(tickets).toHaveLength(2)
        expect(tickets[0].id).toBe(insertedId1)
        expect(tickets[1].id).toBe(insertedId2)
        expect({
          details: tickets[1].details,
          event: eventId,
          paidValue: tickets[1].paidValue,
          person: tickets[1].person,
          status: tickets[1].status
        }).toEqual({
          ...ticket2,
          status: TicketStatus.CANCELED
        })
      })
    })
  })
})
