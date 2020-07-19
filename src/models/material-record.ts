import { IReport } from './report'
import { IReportItemPage } from './pagination'
import { IMaterial } from './material'

export interface IMaterialRecord extends IReport {
  material: IMaterial
  date: string
  quantity: number
}

export type MaterialRecordPage = IReportItemPage<IMaterialRecord>
