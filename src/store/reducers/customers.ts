import { ICustomersState } from '../states'
import { CustomersTypeKeys, CustomersActionTypes } from '../types'
import { emptyPage } from '../../models'

const initialState: ICustomersState = emptyPage

export default (state: ICustomersState = initialState, action: CustomersActionTypes): ICustomersState => {
  switch (action.type) {
    case CustomersTypeKeys.SET_CUSTOMERS:
      return action.payload
    default:
      return state
  }
}
