import { IMaterialRecordsState } from '../states'
import { MaterialRecordsActionTypes, MaterialRecordsTypeKeys } from '../types'
import { emptyReportPage } from '../../models'

const initialState: IMaterialRecordsState = emptyReportPage

export default (
  state: IMaterialRecordsState = initialState,
  action: MaterialRecordsActionTypes
): IMaterialRecordsState => {
  switch (action.type) {
    case MaterialRecordsTypeKeys.SET_MATERIAL_RECORDS:
      return action.payload
    default:
      return state
  }
}
