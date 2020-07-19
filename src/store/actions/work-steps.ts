import { WorkStepsTypeKeys, ISetWorkStepsAction } from '../types'
import { WorkStepPage } from '../../models'

export function setWorkStepsAction(payload: WorkStepPage): ISetWorkStepsAction {
  return { type: WorkStepsTypeKeys.SET_WORK_STEPS, payload }
}
