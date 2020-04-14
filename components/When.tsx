import React from 'react'
import { DateTime } from 'luxon'

const When = ({ dateTime }) => {
  const today = DateTime.local()
  const createdAt = DateTime.fromISO(dateTime)
  const diff = today.diff(createdAt, 'days').toObject()

  if (diff.days < 1) {
    return <span>Hoy</span>
  }

  if (diff.days === 1) {
    return <span>Hace {diff.days} día</span>
  }

  return <span>Hace {diff.days} días</span>
}

export default When
