import { autobind } from 'core-decorators'
import { formatMultiParam, formatParam } from '../../helpers/url'
import {
  IBlobFile,
  ICustomer,
  IFilters,
  IProject,
  IRangeDate,
  IValidatedInputField,
  IWorker,
  IWorkStep,
  TimeRecordPage
} from '../../models'
import { BaseService } from './base'

class TimeRecordsService extends BaseService {
  private segment = 'timerecords'

  public getTimeRecords(
    page = 1,
    workers?: IWorker[],
    customers?: ICustomer[],
    projects?: IProject[],
    workSteps?: IWorkStep[],
    rangeDate?: IRangeDate,
    query?: IValidatedInputField<string>,
    size = 20
  ): Promise<TimeRecordPage> {
    return this.get(
      `${ this.segment }?page=${ page }&size=${ size }` +
      `${ formatMultiParam(workers, 'workerIds') }` +
      `${ formatMultiParam(customers, 'customerIds') }` +
      `${ formatMultiParam(projects, 'projectIds') }` +
      `${ formatMultiParam(workSteps, 'workStepIds') }` +
      `${ formatParam(rangeDate?.from, 'from') }` +
      `${ formatParam(rangeDate?.to, 'to') }` +
      `${ formatParam(query.value, 'q', query.isValid) }`
    )
  }

  public getTimeRecords2(page = 1, filters: IFilters, size = 20): Promise<TimeRecordPage> {
    const { workers, customers, projects, workSteps, rangeDate, query } = filters
    return this.get(
      `${ this.segment }?page=${ page }&size=${ size }` +
      `${ formatMultiParam(workers, 'workerIds') }` +
      `${ formatMultiParam(customers, 'customerIds') }` +
      `${ formatMultiParam(projects, 'projectIds') }` +
      `${ formatMultiParam(workSteps, 'workStepIds') }` +
      `${ formatParam(rangeDate?.from, 'from') }` +
      `${ formatParam(rangeDate?.to, 'to') }` +
      `${ formatParam(query.value, 'q', query.isValid) }`
    )
  }

  public deleteTimeRecord(id: number): Promise<void> {
    return this.delete(`${ this.segment }/${ id }`)
  }

  @autobind
  public export(): Promise<IBlobFile> {
    return this.get(`${ this.segment }/download`)
  }
}

export default new TimeRecordsService()
