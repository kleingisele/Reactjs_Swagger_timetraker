import { IWorker, ICustomer, IProject, IWorkStep, IMaterial, IRangeDate, IValidatedInputField } from '../../models'

export interface IFiltersState {
  workers: IWorker[]
  customers: ICustomer[]
  projects: IProject[]
  workSteps: IWorkStep[]
  materials: IMaterial[]
  rangeDate: IRangeDate
  query: IValidatedInputField<string>
}
