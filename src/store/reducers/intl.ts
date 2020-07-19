import { IntlAction, intlReducer, IntlState } from 'react-intl-redux'
import { literals } from '../../literals'

const locale = 'en-US'

const initialState: IntlState = {
  locale,
  messages: literals[locale]
}

export default (state: IntlState = initialState, action: IntlAction): IntlState => {
  return intlReducer(state, action)
}
