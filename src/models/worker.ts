import { IItemPage } from './pagination'
import { IRole } from './role'

export interface IWorker {
  username: string
  password?: string
  role?: IRole
  id?: number
  firstName?: string
  lastName?: string
}

export const initialWorker: IWorker = {
  username: '',
  password: '',
  role: null
}

export type WorkerPage = IItemPage<IWorker>
