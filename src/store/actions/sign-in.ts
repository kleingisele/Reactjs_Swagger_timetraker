import {
  ISetSignInEmailFieldAction,
  SignInTypeKeys,
  ISetSignInPasswordFieldAction,
  ISetSignInErrorAction
} from '../types'
import { IValidatedInputField } from '../../models'

export function setSignInEmailFieldAction(payload: IValidatedInputField<string>): ISetSignInEmailFieldAction {
  return { type: SignInTypeKeys.SET_SIGN_IN_EMAIL_FIELD, payload }
}

export function setSignInPasswordFieldAction(payload: IValidatedInputField<string>): ISetSignInPasswordFieldAction {
  return { type: SignInTypeKeys.SET_SIGN_IN_PASSWORD_FIELD, payload }
}

export function setSignInErrorAction(payload: Error): ISetSignInErrorAction {
  return { type: SignInTypeKeys.SET_SIGN_IN_ERROR, payload }
}
