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

  if (diff.days < 1) {
    return <span>Hoy</span>
  }

  if (diff.days === 1) {
    return <span>Ayer</span>
  }

  return <span>Hace {diff.days} días</span>
}

export default When
