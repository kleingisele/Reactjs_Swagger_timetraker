import { autobind } from 'core-decorators'
import { formatMultiParam, formatParam } from '../../helpers/url'
import {
  IBlobFile,
  ICustomer,
  IMaterial,
  IProject,
  IRangeDate,
  IValidatedInputField,
  IWorker,
  MaterialRecordPage
} from '../../models'
import { BaseService } from './base'

class MaterialRecordsService extends BaseService {
  private segment = 'materialrecords'

  public getMaterialRecords(
    page = 1,
    workers?: IWorker[],
    customers?: ICustomer[],
    projects?: IProject[],
    materials?: IMaterial[],
    rangeDate?: IRangeDate,
    query?: IValidatedInputField<string>,
    size = 20
  ): Promise<MaterialRecordPage> {
    return this.get(
      `${ this.segment }?page=${ page }&size=${ size }` +
      `${ formatMultiParam(workers, 'workerIds') }` +
      `${ formatMultiParam(customers, 'customerIds') }` +
      `${ formatMultiParam(projects, 'projectIds') }` +
      `${ formatMultiParam(materials, 'materialIds') }` +
      `${ formatParam(rangeDate.from, 'from') }` +
      `${ formatParam(rangeDate.to, 'to') }` +
      `${ formatParam(query.value, 'q', query.isValid) }`
    )
  }

  public deleteMaterialRecord(id: number): Promise<void> {
    return this.delete(`${ this.segment }/${ id }`)
  }

  @autobind
  public export(): Promise<IBlobFile> {
    return this.get(`${ this.segment }/download`)
  }
}

export default new MaterialRecordsService()
