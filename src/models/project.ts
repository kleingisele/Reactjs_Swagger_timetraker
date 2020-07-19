import { ICustomer } from './customer'
import { IItemPage } from './pagination'

export interface IProject {
  name: string
  customer?: ICustomer
  id?: number
}

export const initialProject: IProject = {
  name: '',
  customer: {
    name: '',
    id: 0
  }
}

export type ProjectPage = IItemPage<IProject>
