import { IValidatedInputField } from '../../models'

export enum SignInTypeKeys {
  SET_SIGN_IN_EMAIL_FIELD = 'SET_SIGN_IN_EMAIL_FIELD',
  SET_SIGN_IN_PASSWORD_FIELD = 'SET_SIGN_IN_PASSWORD_FIELD',
  SET_SIGN_IN_ERROR = 'SET_SIGN_IN_ERROR'
}

export interface ISetSignInEmailFieldAction {
  type: typeof SignInTypeKeys.SET_SIGN_IN_EMAIL_FIELD
  payload: IValidatedInputField<string>
}

export interface ISetSignInPasswordFieldAction {
  type: typeof SignInTypeKeys.SET_SIGN_IN_PASSWORD_FIELD
  payload: IValidatedInputField<string>
}

export interface ISetSignInErrorAction {
  type: typeof SignInTypeKeys.SET_SIGN_IN_ERROR
  payload: Error
}

export type SignInActionTypes =
  | ISetSignInEmailFieldAction
  | ISetSignInPasswordFieldAction
  | ISetSignInErrorAction
