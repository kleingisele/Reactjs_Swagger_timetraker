import { WorkStepPage } from '../../models'

export enum WorkStepsTypeKeys {
  SET_WORK_STEPS = 'SET_WORK_STEPS'
}

export interface ISetWorkStepsAction {
  type: typeof WorkStepsTypeKeys.SET_WORK_STEPS
  payload: WorkStepPage
}

export type WorkStepsActionTypes =
  | ISetWorkStepsAction
