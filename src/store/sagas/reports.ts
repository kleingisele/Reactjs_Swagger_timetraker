import { takeLatest, select } from 'redux-saga/effects'
import { ReportsTypeKeys, ISetReportsPaginationAction } from '../types'
import { getFiltersReports, IFiltersReports } from './selectors'
import { fetchMaterialRecords, fetchTimeRecords } from './filters'

function* fetchRecords(action: ISetReportsPaginationAction) {
  try {
    const { reports, filters }: IFiltersReports = yield select(getFiltersReports)
    const pageNumber = action.payload.pageNumber
    if (reports.activeTab.label === 'materialRecords') yield fetchMaterialRecords(filters, pageNumber)
    else yield fetchTimeRecords(filters, pageNumber)
  } catch (error) {
    throw error
  }
}

export default function* saga() {
  yield takeLatest(ReportsTypeKeys.SET_REPORTS_PAGINATION, fetchRecords)
}
