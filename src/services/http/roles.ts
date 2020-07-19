import { BaseService } from './base'
import { IRole } from '../../models'

class RoleService extends BaseService {
  private segment = 'roles'

  public getRoles(): Promise<IRole[]> {
    return this.get(`${ this.segment }`)
  }
}

export default new RoleService()
