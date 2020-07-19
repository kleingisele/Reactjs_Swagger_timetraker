import { ISessionState } from '../states'

export enum SessionTypeKeys {
  SET_SESSION = 'SET_SESSION'
}

export interface ISetSessionAction {
  type: typeof SessionTypeKeys.SET_SESSION
  payload: ISessionState
}

export type SessionActionTypes =
  | ISetSessionAction
