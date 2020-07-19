import { WorkspacePage } from '../../models'

export enum WorkspacesTypeKeys {
  SET_WORKSPACES = 'SET_WORKSPACES'
}

export interface ISetWorkspacesAction {
  type: typeof WorkspacesTypeKeys.SET_WORKSPACES
  payload: WorkspacePage
}

export type WorkspacesActionTypes =
  | ISetWorkspacesAction
