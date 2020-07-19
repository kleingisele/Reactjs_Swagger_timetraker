import { IWorkersState } from '../states'
import { WorkersTypeKeys, WorkersActionTypes } from '../types'
import { emptyPage } from '../../models'

const initialState: IWorkersState = emptyPage

export default (state: IWorkersState = initialState, action: WorkersActionTypes): IWorkersState => {
  switch (action.type) {
    case WorkersTypeKeys.SET_WORKERS:
      return action.payload
    default:
      return state
  }
}
