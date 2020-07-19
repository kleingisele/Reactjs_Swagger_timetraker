import { IFiltersState } from '../states'
import { FiltersActionTypes, FiltersTypeKeys } from '../types'

export const initialState: IFiltersState = {
  workers: [],
  customers: [],
  projects: [],
  workSteps: [],
  materials: [],
  rangeDate: {
    from: null,
    to: null
  },
  query: {
    isValid: false,
    value: ''
  }
}

export default (state: IFiltersState = initialState, action: FiltersActionTypes): IFiltersState => {
  switch (action.type) {
    case FiltersTypeKeys.SET_FILTER_VALUE:
      return { ...state, ...action.payload }
    case FiltersTypeKeys.RESET_FILTERS:
      return initialState
    default:
      return state
  }
}
