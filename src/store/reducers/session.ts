import { ISessionState } from '../states'
import { SessionActionTypes, SessionTypeKeys } from '../types'

const initialState: ISessionState = null

export default (state: ISessionState = initialState, action: SessionActionTypes): ISessionState => {
  switch (action.type) {
    case SessionTypeKeys.SET_SESSION:
      return action.payload
    default:
      return state
  }
}
