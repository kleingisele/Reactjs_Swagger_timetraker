import { IProjectsState } from '../states'
import { ProjectsActionTypes, ProjectsTypeKeys } from '../types'
import { emptyPage } from '../../models'

const initialState: IProjectsState = emptyPage

export default (state: IProjectsState = initialState, action: ProjectsActionTypes): IProjectsState => {
  switch (action.type) {
    case ProjectsTypeKeys.SET_PROJECTS:
      return action.payload
    default:
      return state
  }
}
