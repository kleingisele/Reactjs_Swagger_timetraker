import { takeLatest, put } from 'redux-saga/effects'
import { SessionTypeKeys, ISetSessionAction } from '../types'
import { literals } from '../../literals'

function* setLocale(action: ISetSessionAction) {
  if (!action.payload) return
  const locale = action.payload.locale
  yield put({
    type: '@@intl/UPDATE',
    payload: {
      locale,
      messages: literals[locale],
    }
  })
}

export default function* saga() {
  yield takeLatest(SessionTypeKeys.SET_SESSION, setLocale)
}
