import { MaterialRecordPage } from '../../models'

export enum MaterialRecordsTypeKeys {
  SET_MATERIAL_RECORDS = 'SET_MATERIAL_RECORDS'
}

export interface ISetMaterialRecordsAction {
  type: typeof MaterialRecordsTypeKeys.SET_MATERIAL_RECORDS
  payload: MaterialRecordPage
}

export type MaterialRecordsActionTypes =
  | ISetMaterialRecordsAction
