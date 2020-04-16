import { DateTime } from 'luxon'

interface Props {
  dateTime: string
}
const Date = ({ dateTime }: Props) => {
  const date = DateTime.fromISO(dateTime).setLocale('es').toFormat('DDD')

  return <span>{date}</span>
}

export default Date
