import React from 'react'
import { DateTime } from 'luxon'
import { DateData } from '../utils/types'

const When = ({ dateTime }: DateData) => {
  const local = DateTime.local().toFormat('yyyy-MM-dd')
  const today = DateTime.fromISO(local)
  const date = DateTime.fromISO(dateTime)
  const diff = today.diff(date, 'days')
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
