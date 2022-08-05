import { Channel, Connection, ConsumeMessage, Options } from 'amqplib'

import { RabbitMQConnector } from './connection'

import { ExchangeType } from '~source/shared/types'

export default class RabbitMQServer {
  private connection: Connection
  private channel: Channel

  async start (): Promise<void> {
    this.connection = await RabbitMQConnector.getConnection()
    this.channel = await this.connection.createChannel()
  }

  async publishInQueue (queue: string, message: string) {
    return this.channel.sendToQueue(queue, Buffer.from(message))
  }

  async publishInExchange (exchange: string, routingKey: string, message: string): Promise<boolean> {
    return this.channel.publish(exchange, routingKey, Buffer.from(message))
  }

  async consume (queue: string, callback: (message: object) => Promise<void>) {
    return this.channel.consume(queue, async (message: ConsumeMessage | null) => {
      if (!message) {
        return console.error('Message not found')
      }

      const parsedMessage = JSON.parse(message?.content.toString())

      await callback(parsedMessage)
      this.channel.ack(message)
    })
  }

  async createQueue (queue: string, options?: Options.AssertQueue) {
    return this.channel.assertQueue(queue, options)
  }

  async createExchange (exchange: string, type: ExchangeType, options?: Options.AssertExchange) {
    return this.channel.assertExchange(exchange, type, options)
  }

  async bindQueueToExchange (queue: string, exchange: string, pattern = '') {
    return this.channel.bindQueue(queue, exchange, pattern)
  }

  async prefetch () {
    return this.channel.prefetch(1)
  }
}
