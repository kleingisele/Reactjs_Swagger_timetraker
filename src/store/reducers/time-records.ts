import { ITimeRecordsState } from '../states'
import { TimeRecordsActionTypes, TimeRecordsTypeKeys } from '../types'
import { emptyReportPage } from '../../models'

const initialState: ITimeRecordsState = emptyReportPage

export default (
  state: ITimeRecordsState = initialState,
  action: TimeRecordsActionTypes
): ITimeRecordsState => {
  switch (action.type) {
    case TimeRecordsTypeKeys.SET_TIME_RECORDS:
      return action.payload
    default:
      return state
  }
}
