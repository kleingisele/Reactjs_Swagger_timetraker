import { MaterialPage } from '../../models'

export enum MaterialsTypeKeys {
  SET_MATERIALS = 'SET_MATERIALS'
}

export interface ISetMaterialsAction {
  type: typeof MaterialsTypeKeys.SET_MATERIALS
  payload: MaterialPage
}

export type MaterialsActionTypes =
  | ISetMaterialsAction
