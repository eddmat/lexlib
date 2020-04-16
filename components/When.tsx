import React from 'react'
import { DateTime } from 'luxon'

type DateProp = {
  dateTime: string
}

const When = ({ dateTime }: DateProp) => {
  const local = DateTime.local().toFormat('yyyy-MM-dd')
  const today = DateTime.fromISO(local)
  const createdAt = DateTime.fromISO(dateTime)
  const diff = today.diff(createdAt, 'days').toObject()
  const when = Math.trunc(diff.days)

  if (when < 1) {
    return <span>Hoy</span>
  }

  if (when === 1) {
    return <span>Ayer</span>
  }

  return <span>Hace {when} días</span>
}

export default When
