import { IReportItemPage } from './pagination'
import { IReport } from './report'
import { IWorkStep } from './work-step'

export interface ITimeRecord extends IReport {
  workStep: IWorkStep
  description: string
  date: string
  startTime: Date
  endTime: Date
  totalTime: string
}

export type TimeRecordPage = IReportItemPage<ITimeRecord>
