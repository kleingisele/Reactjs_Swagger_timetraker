import { combineReducers } from 'redux'
import signIn from './sign-in'
import session from './session'
import intl from './intl'
import filters from './filters'
import reports from './reports'
import workSteps from './work-steps'
import projects from './projects'
import workspaces from './workspaces'
import customers from './customers'
import materials from './materials'
import workers from './workers'
import materialRecords from './material-records'
import timeRecords from './time-records'

export default combineReducers({
  signIn,
  session,
  intl,
  filters,
  reports,
  workSteps,
  projects,
  workspaces,
  customers,
  materials,
  workers,
  materialRecords,
  timeRecords
})
