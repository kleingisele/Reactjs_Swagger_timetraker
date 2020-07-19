import { IItemPage } from './pagination'

export interface IWorkspace {
  id?: number
  name: string
  trackHours: boolean
}

export type WorkspacePage = IItemPage<IWorkspace>
