import { WorkerPage } from '../../models'

export enum WorkersTypeKeys {
  SET_WORKERS = 'SET_WORKERS'
}

export interface ISetWorkersAction {
  type: typeof WorkersTypeKeys.SET_WORKERS
  payload: WorkerPage
}

export type WorkersActionTypes =
  | ISetWorkersAction
