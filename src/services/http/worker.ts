import { formatParam } from '../../helpers/url'
// tslint:disable-next-line: ordered-imports
import { IValidatedInputField, IWorker, WorkerPage } from '../../models'
import { BaseService } from './base'

class WorkerService extends BaseService {
  private segment = 'workers'

  public getWorkers(
    page = 1,
    areArchivedIncluded = false,
    query?: IValidatedInputField<string>,
    size = 20
  ): Promise<WorkerPage> {
    return this.get(
      `${ this.segment }?page=${ page }&size=${ size }&archived=${ areArchivedIncluded }` +
      `${ formatParam(query.value, 'q', query.isValid) }`
    )
  }

  public deleteWorker(id: number): Promise<void> {
    return this.delete(`${ this.segment }/${ id }`)
  }

  public createWorker(worker: IWorker): Promise<IWorker> {
    return this.post(this.segment, worker)
  }

  public updateWorker(worker: IWorker): Promise<IWorker> {
    return this.put(`${ this.segment }/${ worker.id }`, worker)
  }

  public updatePassword(id: number, password: string): Promise<IWorker> {
    return this.patch(`${ this.segment }/${ id }/password`, password)
  }
}

export default new WorkerService()
