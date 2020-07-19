import { TimeRecordPage, MaterialRecordPage, ITabOption, IPagination } from '../../models'

export interface IReportsState {
  timeRecords: TimeRecordPage
  materialRecords: MaterialRecordPage
  pagination: IPagination
  activeTab: ITabOption
}
