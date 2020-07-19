import { all } from 'redux-saga/effects'

import fitlersSaga from './filters'
import reportsSaga from './reports'
import intlSaga from './intl'
import sessionSaga from './session'

export default function* saga() {
  yield all([ fitlersSaga(), reportsSaga(), intlSaga(), sessionSaga() ])
}
