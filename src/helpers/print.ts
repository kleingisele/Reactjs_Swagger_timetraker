import { format } from 'date-fns'
import { literals } from '../literals'
import { TimeRecordPage } from '../models'

export const printRecords = (records: TimeRecordPage, locale: string) => {
  records.startDate = format(new Date(records.startDate), 'dd/MM/yyyy')
  records.endDate = format(new Date(records.endDate), 'dd/MM/yyyy')
  records.items = records.items.map(x => ({ ...x, date: format(new Date(x.date), 'dd/MM/yyyy') }))
  // localStorage.setItem(
  //   'timetracker-print-records',
  //   JSON.stringify({...records, entryModeByHours: session.entryModeByHours}))
  localStorage.setItem('timetracker-print-records', JSON.stringify(records))
  localStorage.setItem('timetracker-print-records-translations', JSON.stringify(literals[locale]))

  window.open(`/print-time-records.html`)
}
