import { formatParam } from '../../helpers/url'
import { IProject, IValidatedInputField, ProjectPage } from '../../models'
import { BaseService } from './base'

class ProjectService extends BaseService {
  private segment = 'projects'

  public getProjects(
    page = 1,
    areArchivedIncluded = false,
    query?: IValidatedInputField<string>,
    size = 20
  ): Promise<ProjectPage> {
    return this.get(
      `${ this.segment }?page=${ page }&size=${ size }&archived=${ areArchivedIncluded }` +
      `${ formatParam(query.value, 'q', query.isValid) }`
    )
  }

  public deleteProjects(id: number): Promise<void> {
    return this.delete(`${ this.segment }/${ id }`)
  }

  public createProject(project: IProject): Promise<IProject> {
    return this.post(this.segment, project)
  }

  public updateProjects(project: IProject): Promise<IProject> {
    return this.put(`${ this.segment }/${ project.id }`, project)
  }
}

export default new ProjectService()
