import { IStoreState, IFiltersState, IReportsState, ISessionState } from '../states'

export interface IFiltersReports {
  filters: IFiltersState
  reports: IReportsState
}

export const getFiltersReports = (state: IStoreState): IFiltersReports => ({
  filters: state.filters,
  reports: state.reports
})

export const getFilters = (state: IStoreState): IFiltersState => state.filters

export const getSession = (state: IStoreState): ISessionState => state.session
