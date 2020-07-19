import { IItemPage } from './pagination'

export interface ICustomer {
  name: string
  id?: number
}

export type CustomerPage = IItemPage<ICustomer>
