import { store } from '../components/Provider'

export function getLanguage(): string {
  const state = store.getState()
  return state.intl ? state.intl.locale : 'en-US'
}
