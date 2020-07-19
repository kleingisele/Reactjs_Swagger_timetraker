import { WorkersTypeKeys, ISetWorkersAction } from '../types'
import { WorkerPage } from '../../models'

export function setWorkersAction(payload: WorkerPage): ISetWorkersAction {
  return { type: WorkersTypeKeys.SET_WORKERS, payload }
}
