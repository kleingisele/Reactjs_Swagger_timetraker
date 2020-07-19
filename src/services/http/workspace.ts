import { BaseService } from './base'
import { IWorkspace, WorkspacePage } from '../../models'

class WorkspaceService extends BaseService {
  private segment = 'workspaces'

  public getWorkspaces(page = 1, areArchivedIncluded = false, size = 20): Promise<WorkspacePage> {
    return this.get(`${ this.segment }?page=${ page }&size=${ size }&archived=${ areArchivedIncluded }`)
  }

  public deleteWorkspace(id: number): Promise<void> {
    return this.delete(`${ this.segment }/${ id }`)
  }

  public createWorkspace(workStep: IWorkspace): Promise<IWorkspace> {
    return this.post(this.segment, workStep)
  }

  public updateWorkspace(workStep: IWorkspace): Promise<IWorkspace> {
    return this.put(`${ this.segment }/${ workStep.id }`, workStep)
  }
}

export default new WorkspaceService()
