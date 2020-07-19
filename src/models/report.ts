import { IWorker } from './worker'
import { ICustomer } from './customer'
import { IProject } from './project'
import { TimeRecordPage } from './time-record'
import { MaterialRecordPage } from './material-record'
import { IMaterial } from './material'
import { IWorkStep } from './work-step'

export interface IReport {
  id: number
  worker: IWorker
  customer: ICustomer
  project: IProject
}

export interface IInitialReport {
  workers: IWorker[]
  customers: ICustomer[]
  projects: IProject[]
  workSteps: IWorkStep[]
  materials: IMaterial[]
  timeRecords: TimeRecordPage
  materialRecords: MaterialRecordPage
}
