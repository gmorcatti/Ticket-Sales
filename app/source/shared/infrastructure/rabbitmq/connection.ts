import { connect, Connection } from 'amqplib'

import env from '~source/shared/env'

export class RabbitMQConnector {
  private static connection: Connection

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  private constructor () {}

  public static async getConnection () {
    if (!RabbitMQConnector.connection) {
      RabbitMQConnector.connection = await connect(env.rabbitMQ.uri)
    }

    return RabbitMQConnector.connection
  }
}
