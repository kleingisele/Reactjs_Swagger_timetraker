import { BaseService } from './base'
import { IInitialReport } from '../../models'

class ReportService extends BaseService {
  private segment = 'reports'

  public getInitialReport(size = 20): Promise<IInitialReport> {
    return this.get(`${ this.segment }?size=${ size }`)
  }
}

export default new ReportService()
