import { put, select, debounce } from 'redux-saga/effects'
import { FiltersTypeKeys, ReportsTypeKeys, ISetFilterValueAction } from '../types'
import { getFiltersReports, IFiltersReports } from './selectors'
import { TimeRecordsService, MaterialRecordsService } from '../../services'
import { IFiltersState } from '../states'
import { IValidatedInputField } from '../../models'

export function* fetchTimeRecords(filters: IFiltersState, pageNumber?: number) {
  try {
    const page = yield TimeRecordsService.getTimeRecords(
      pageNumber,
      filters.workers,
      filters.customers,
      filters.projects,
      filters.workSteps,
      filters.rangeDate,
      filters.query
    )
    yield put({ type: ReportsTypeKeys.SET_TIME_RECORDS_REPORT, payload: page })
  } catch (error) {
    throw error
  }
}

export function* fetchMaterialRecords(filters: IFiltersState, pageNumber?: number) {
  try {
    const page = yield MaterialRecordsService.getMaterialRecords(
      pageNumber,
      filters.workers,
      filters.customers,
      filters.projects,
      filters.materials,
      filters.rangeDate,
      filters.query
    )
    yield put({ type: ReportsTypeKeys.SET_MATERIAL_RECORDS_REPORT, payload: page })
  } catch (error) {
    throw error
  }
}

function* fetchRecords(action: ISetFilterValueAction) {
  const tableSearch = action.payload.tableSearch as IValidatedInputField<string>
  if (!!tableSearch && !tableSearch.isValid) return

  try {
    const { reports, filters }: IFiltersReports = yield select(getFiltersReports)
    if (reports.activeTab.label === 'materialRecords') yield fetchMaterialRecords(filters)
    else yield fetchTimeRecords(filters)
  } catch (error) {
    throw error
  }
}

export default function* saga() {
  yield debounce(300, FiltersTypeKeys.SET_FILTER_VALUE, fetchRecords)
}
