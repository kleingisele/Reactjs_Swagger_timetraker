import { IWorkspacesState } from '../states'
import { WorkspacesActionTypes, WorkspacesTypeKeys } from '../types'
import { emptyPage } from '../../models'

const initialState: IWorkspacesState = emptyPage

export default (state: IWorkspacesState = initialState, action: WorkspacesActionTypes): IWorkspacesState => {
  switch (action.type) {
    case WorkspacesTypeKeys.SET_WORKSPACES:
      return action.payload
    default:
      return state
  }
}
