import { TimeRecordPage, MaterialRecordPage, IPagination, ITabOption } from '../../models'

export enum ReportsTypeKeys {
  SET_TIME_RECORDS_REPORT = 'SET_TIME_RECORDS_REPORT',
  SET_MATERIAL_RECORDS_REPORT = 'SET_MATERIAL_RECORDS_REPORT',
  SET_REPORTS_PAGINATION = 'SET_REPORTS_PAGINATION',
  SET_ACTIVE_TAB = 'SET_ACTIVE_TAB',
  RESET_REPORTS = 'RESET_REPORTS'
}

export interface ISetTimeRecordsReportAction {
  type: typeof ReportsTypeKeys.SET_TIME_RECORDS_REPORT
  payload: TimeRecordPage
}

export interface ISetMaterialRecordsReportAction {
  type: typeof ReportsTypeKeys.SET_MATERIAL_RECORDS_REPORT
  payload: MaterialRecordPage
}

export interface ISetReportsPaginationAction {
  type: typeof ReportsTypeKeys.SET_REPORTS_PAGINATION
  payload: IPagination
}

export interface ISetActiveTabAction {
  type: typeof ReportsTypeKeys.SET_ACTIVE_TAB
  payload: ITabOption
}

export interface IResetReportsAction {
  type: typeof ReportsTypeKeys.RESET_REPORTS
}

export type ReportsActionTypes =
  | ISetTimeRecordsReportAction
  | ISetMaterialRecordsReportAction
  | ISetReportsPaginationAction
  | ISetActiveTabAction
  | IResetReportsAction
