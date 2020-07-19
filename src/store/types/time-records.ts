import { TimeRecordPage } from '../../models'

export enum TimeRecordsTypeKeys {
  SET_TIME_RECORDS = 'SET_TIME_RECORDS'
}

export interface ISetTimeRecordsAction {
  type: typeof TimeRecordsTypeKeys.SET_TIME_RECORDS
  payload: TimeRecordPage
}

export type TimeRecordsActionTypes =
  | ISetTimeRecordsAction
