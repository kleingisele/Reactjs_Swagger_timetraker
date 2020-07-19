import {
  ReportsTypeKeys,
  ISetMaterialRecordsReportAction,
  ISetTimeRecordsReportAction,
  ISetReportsPaginationAction,
  ISetActiveTabAction,
  IResetReportsAction
} from '../types'
import { TimeRecordPage, MaterialRecordPage, IPagination, ITabOption } from '../../models'

export function setTimeRecordsReportAction(payload: TimeRecordPage): ISetTimeRecordsReportAction {
  return { type: ReportsTypeKeys.SET_TIME_RECORDS_REPORT, payload }
}

export function setMaterialRecordsReportAction(payload: MaterialRecordPage): ISetMaterialRecordsReportAction {
  return { type: ReportsTypeKeys.SET_MATERIAL_RECORDS_REPORT, payload }
}

export function setReportsPaginationAction(payload: IPagination): ISetReportsPaginationAction {
  return { type: ReportsTypeKeys.SET_REPORTS_PAGINATION, payload }
}

export function setActiveTabAction(payload: ITabOption): ISetActiveTabAction {
  return { type: ReportsTypeKeys.SET_ACTIVE_TAB, payload }
}

export function resetReportsAction(): IResetReportsAction {
  return { type: ReportsTypeKeys.RESET_REPORTS }
}
