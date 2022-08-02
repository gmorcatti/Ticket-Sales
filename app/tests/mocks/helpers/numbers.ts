import { randomUUID } from 'node:crypto'

export const generateId = () => {
  return randomUUID()
}

export const randomIntNumber = (maxRange = 1000) => {
  return Math.floor(Math.random() * maxRange)
}
