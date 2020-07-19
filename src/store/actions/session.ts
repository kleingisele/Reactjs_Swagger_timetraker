import { ISetSessionAction, SessionTypeKeys } from '../types'
import { ISessionState } from '../states'

export function setSessionAction(payload: ISessionState): ISetSessionAction {
  return { type: SessionTypeKeys.SET_SESSION, payload }
}
