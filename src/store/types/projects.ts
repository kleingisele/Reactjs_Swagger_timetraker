import { ProjectPage } from '../../models'

export enum ProjectsTypeKeys {
  SET_PROJECTS = 'SET_PROJECTS'
}

export interface ISetProjectsAction {
  type: typeof ProjectsTypeKeys.SET_PROJECTS
  payload: ProjectPage
}

export type ProjectsActionTypes =
  | ISetProjectsAction
