import { BaseService } from './base'
import { IUnit } from '../../models/unit'

class UnitService extends BaseService {
  private segment = 'units'

  public getUnits(): Promise<IUnit[]> {
    return this.get(`${ this.segment }`)
  }
}

export default new UnitService()
