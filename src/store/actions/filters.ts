import { FiltersTypeKeys, ISetFilterValueAction, IResetFiltersAction } from '../types'
import { IValidatedInputField } from '../../models'

export function setFilterValueAction(
  payload: { [key: string]: string | string[] | IValidatedInputField<string> }
): ISetFilterValueAction {
  return { type: FiltersTypeKeys.SET_FILTER_VALUE, payload }
}

export function resetFiltersAction(): IResetFiltersAction {
  return { type: FiltersTypeKeys.RESET_FILTERS }
}
