import { DateTime } from 'luxon'

const Date = (dateTime: string, format: string) => {
  return DateTime.fromISO(dateTime).setLocale('es').toFormat(format)
}

export default Date
