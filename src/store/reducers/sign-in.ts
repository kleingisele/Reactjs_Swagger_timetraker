import { ISignInState } from '../states'
import { SignInActionTypes, SignInTypeKeys } from '../types'

const initialState: ISignInState = {
  email: {
    value: '',
    isValid: true
  },
  password: {
    value: '',
    isValid: true
  },
  error: null
}

export default (state: ISignInState = initialState, action: SignInActionTypes): ISignInState => {
  switch (action.type) {
    case SignInTypeKeys.SET_SIGN_IN_EMAIL_FIELD:
      return { ...state, email: action.payload }
    case SignInTypeKeys.SET_SIGN_IN_PASSWORD_FIELD:
      return { ...state, password: action.payload }
    case SignInTypeKeys.SET_SIGN_IN_ERROR:
      return { ...state, error: action.payload }
    default:
      return state
  }
}
