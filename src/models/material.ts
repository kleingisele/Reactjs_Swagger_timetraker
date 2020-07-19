import { IItemPage } from './pagination'
import { IUnit } from './unit'

export interface IMaterial {
  name: string
  unit: IUnit
  id?: number
}

export const initialMaterial: IMaterial = {
  name: '',
  unit: {
    id: 0,
    name: ''
  }
}

export type MaterialPage = IItemPage<IMaterial>
