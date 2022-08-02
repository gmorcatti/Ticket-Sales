export const getNowMinusHours = (hours: number) => {
  const now = new Date()
  now.setHours(now.getHours() - hours)

  return now
}

export const getNowMinusDays = (days: number) => {
  const now = new Date()
  now.setDate(now.getDate() - days)

  return now
}
