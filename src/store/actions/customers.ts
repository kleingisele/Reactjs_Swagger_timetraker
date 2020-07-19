import { ISetCustomersAction, CustomersTypeKeys } from '../types'
import { CustomerPage } from '../../models'

export function setCustomersAction(payload: CustomerPage): ISetCustomersAction {
  return { type: CustomersTypeKeys.SET_CUSTOMERS, payload }
}
