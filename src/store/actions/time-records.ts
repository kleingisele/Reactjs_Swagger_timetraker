import { TimeRecordsTypeKeys, ISetTimeRecordsAction } from '../types'
import { TimeRecordPage } from '../../models'

export function setTimeRecordsAction(payload: TimeRecordPage): ISetTimeRecordsAction {
  return { type: TimeRecordsTypeKeys.SET_TIME_RECORDS, payload }
}
