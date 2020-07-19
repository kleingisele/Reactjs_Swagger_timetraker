import { IItemPage } from './pagination'

export interface IWorkStep {
  name: string
  id?: number
}

export type WorkStepPage = IItemPage<IWorkStep>
