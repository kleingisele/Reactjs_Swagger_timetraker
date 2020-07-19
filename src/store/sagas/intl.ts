import { takeLatest, select } from 'redux-saga/effects'
import { IntlAction } from 'react-intl-redux'
import { AuthenticationService } from '../../services'
import { ISessionState } from '../states'
import { getSession } from './selectors'

function* updateUserLocale(action: IntlAction) {
  try {
    const session: ISessionState = yield select(getSession)
    if (!!session) {
      yield AuthenticationService.updateLocale(action.payload.locale)
    }
  } catch (error) {
    throw error
  }
}

export default function* saga() {
  yield takeLatest('@@intl/UPDATE', updateUserLocale)
}
