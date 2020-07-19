import { IntlState } from 'react-intl-redux'
import { ISignInState } from './sign-in'
import { ISessionState } from './session'
import { IFiltersState } from './filters'
import { IReportsState } from './reports'
import { IWorkStepsState } from './work-steps'
import { IProjectsState } from './projects'
import { IWorkspacesState } from './workspaces'
import { ICustomersState } from './customers'
import { IMaterialsState } from './materials'
import { IWorkersState } from './workers'
import { IMaterialRecordsState } from './material-records'
import { ITimeRecordsState } from './time-records'

export interface IStoreState {
  intl: IntlState
  signIn: ISignInState
  session: ISessionState
  filters: IFiltersState
  reports: IReportsState
  workSteps: IWorkStepsState
  projects: IProjectsState
  workspaces: IWorkspacesState
  customers: ICustomersState
  materials: IMaterialsState
  workers: IWorkersState
  materialRecords: IMaterialRecordsState
  timeRecords: ITimeRecordsState
}

export * from './sign-in'
export * from './session'
export * from './filters'
export * from './reports'
export * from './work-steps'
export * from './projects'
export * from './workspaces'
export * from './customers'
export * from './materials'
export * from './workers'
export * from './material-records'
export * from './time-records'
