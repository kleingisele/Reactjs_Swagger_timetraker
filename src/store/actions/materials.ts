import { ISetMaterialsAction, MaterialsTypeKeys } from '../types'
import { MaterialPage } from '../../models'

export function setMaterialsAction(payload: MaterialPage): ISetMaterialsAction {
  return { type: MaterialsTypeKeys.SET_MATERIALS, payload }
}
