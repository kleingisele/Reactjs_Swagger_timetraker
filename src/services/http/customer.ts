import { formatParam } from '../../helpers/url'
import { CustomerPage, ICustomer, IValidatedInputField } from '../../models'
import { BaseService } from './base'

class CustomerService extends BaseService {
  private segment = 'customers'

  public getCustomers(
    page?,
    areArchivedIncluded = false,
    query?: IValidatedInputField<string>,
    size?,
  ): Promise<CustomerPage> {
    return this.get(
      `${ this.segment }?archived=${ areArchivedIncluded }` +
      `${ formatParam(page, 'page') }` +
      `${ formatParam(size, 'size') }` +
      `${ formatParam(!!query && query.value, 'q', !!query && query.isValid) }`
    )
  }

  public deleteCustomer(id: number): Promise<void> {
    return this.delete(`${ this.segment }/${ id }`)
  }

  public createCustomer(workStep: ICustomer): Promise<ICustomer> {
    return this.post(this.segment, workStep)
  }

  public updateCustomer(workStep: ICustomer): Promise<ICustomer> {
    return this.put(`${ this.segment }/${ workStep.id }`, workStep)
  }
}

export default new CustomerService()
