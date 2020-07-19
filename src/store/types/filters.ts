import { IValidatedInputField } from '../../models'

export enum FiltersTypeKeys {
  SET_FILTER_VALUE = 'SET_FILTER_VALUE',
  RESET_FILTERS = 'RESET_FILTERS'
}

export interface ISetFilterValueAction {
  type: typeof FiltersTypeKeys.SET_FILTER_VALUE
  payload: { [key: string]: string | string[] | IValidatedInputField<string> }
}

export interface IResetFiltersAction {
  type: typeof FiltersTypeKeys.RESET_FILTERS
}

export type FiltersActionTypes =
  | ISetFilterValueAction
  | IResetFiltersAction
