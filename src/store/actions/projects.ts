import { ProjectsTypeKeys, ISetProjectsAction } from '../types'
import { ProjectPage } from '../../models'

export function setProjectsAction(payload: ProjectPage): ISetProjectsAction {
  return { type: ProjectsTypeKeys.SET_PROJECTS, payload }
}
