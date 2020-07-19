import { IWorkStepsState } from '../states'
import { WorkStepsActionTypes, WorkStepsTypeKeys } from '../types'
import { emptyPage } from '../../models'

const initialState: IWorkStepsState = emptyPage

export default (state: IWorkStepsState = initialState, action: WorkStepsActionTypes): IWorkStepsState => {
  switch (action.type) {
    case WorkStepsTypeKeys.SET_WORK_STEPS:
      return action.payload
    default:
      return state
  }
}
