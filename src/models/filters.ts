import { ICustomer } from './customer'
import { IMaterial } from './material'
import { IProject } from './project'
import { IRangeDate } from './range-date'
import { IValidatedInputField } from './validated-input-field'
import { IWorkStep } from './work-step'
import { IWorker } from './worker'

export interface IFilters {
  workers: IWorker[]
  customers: ICustomer[]
  projects: IProject[]
  workSteps: IWorkStep[]
  materials: IMaterial[]
  rangeDate: IRangeDate
  query: IValidatedInputField<string>
  areArchivedShown: boolean
}

export const emptyFilters: IFilters = {
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
    value: '',
    isValid: false
  },
  areArchivedShown: false
}
