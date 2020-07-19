import { IReportsState } from '../states'
import { ReportsActionTypes, ReportsTypeKeys } from '../types'
import { emptyReportPage } from '../../models'

const initialState: IReportsState = {
  timeRecords: emptyReportPage,
  materialRecords: emptyReportPage,
  pagination: null,
  activeTab: null
}

export default (state: IReportsState = initialState, action: ReportsActionTypes): IReportsState => {
  switch (action.type) {
    case ReportsTypeKeys.SET_TIME_RECORDS_REPORT:
      return { ...state, timeRecords: action.payload, pagination: action.payload.pagination }
    case ReportsTypeKeys.SET_MATERIAL_RECORDS_REPORT:
      return { ...state, materialRecords: action.payload, pagination: action.payload.pagination }
    case ReportsTypeKeys.SET_REPORTS_PAGINATION:
      return { ...state, pagination: action.payload }
    case ReportsTypeKeys.SET_ACTIVE_TAB:
      return { ...state, activeTab: action.payload }
    case ReportsTypeKeys.RESET_REPORTS:
      return initialState
    default:
      return state
  }
}
