import { formatParam } from '../../helpers/url'
import { IValidatedInputField, IWorkStep, WorkStepPage } from '../../models'
import { BaseService } from './base'

class WorkStepService extends BaseService {
  private segment = 'worksteps'

  public getWorkSteps(
    page = 1,
    areArchivedIncluded = false,
    query?: IValidatedInputField<string>,
    size = 20
  ): Promise<WorkStepPage> {
    return this.get(
      `${ this.segment }?page=${ page }&size=${ size }&archived=${ areArchivedIncluded }` +
      `${ formatParam(query.value, 'q', query.isValid) }`
    )
  }

  public deleteWorkStep(id: number): Promise<void> {
    return this.delete(`${ this.segment }/${ id }`)
  }

  public createWorkStep(workStep: IWorkStep): Promise<IWorkStep> {
    return this.post(this.segment, workStep)
  }

  public updateWorkStep(workStep: IWorkStep): Promise<IWorkStep> {
    return this.put(`${ this.segment }/${ workStep.id }`, workStep)
  }
}

export default new WorkStepService()
