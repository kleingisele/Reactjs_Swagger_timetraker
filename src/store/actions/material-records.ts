import { ISetMaterialRecordsAction, MaterialRecordsTypeKeys } from '../types'
import { MaterialRecordPage } from '../../models'

export function setMaterialRecordsAction(payload: MaterialRecordPage): ISetMaterialRecordsAction {
  return { type: MaterialRecordsTypeKeys.SET_MATERIAL_RECORDS, payload }
}
