import { CustomerPage } from '../../models'

export enum CustomersTypeKeys {
  SET_CUSTOMERS = 'SET_CUSTOMERS'
}

export interface ISetCustomersAction {
  type: typeof CustomersTypeKeys.SET_CUSTOMERS
  payload: CustomerPage
}

export type CustomersActionTypes =
  | ISetCustomersAction
