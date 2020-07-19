import { IValidatedInputField } from '../../models'

export interface ISignInState {
  email: IValidatedInputField<string>
  password: IValidatedInputField<string>
  error: Error
}
