import { IMaterialsState } from '../states'
import { MaterialsTypeKeys, MaterialsActionTypes } from '../types'
import { emptyPage } from '../../models'

const initialState: IMaterialsState = emptyPage

export default (state: IMaterialsState = initialState, action: MaterialsActionTypes): IMaterialsState => {
  switch (action.type) {
    case MaterialsTypeKeys.SET_MATERIALS:
      return action.payload
    default:
      return state
  }
}
