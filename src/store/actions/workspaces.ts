import { ISetWorkspacesAction, WorkspacesTypeKeys } from '../types'
import { WorkspacePage } from '../../models'

export function setWorkspacesAction(payload: WorkspacePage): ISetWorkspacesAction {
  return { type: WorkspacesTypeKeys.SET_WORKSPACES, payload }
}
