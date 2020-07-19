import { formatParam } from '../../helpers/url'
import { IMaterial, IValidatedInputField, MaterialPage } from '../../models'
import { BaseService } from './base'

class MaterialService extends BaseService {
  private segment = 'materials'

  public getMaterials(
    page = 1,
    areArchivedIncluded = false,
    query?: IValidatedInputField<string>,
    size = 20
  ): Promise<MaterialPage> {
    return this.get(
      `${ this.segment }?page=${ page }&size=${ size }&archived=${ areArchivedIncluded }` +
      `${ formatParam(query.value, 'q', query.isValid) }`
    )
  }

  public deleteMaterial(id: number): Promise<void> {
    return this.delete(`${ this.segment }/${ id }`)
  }

  public createMaterial(material: IMaterial): Promise<MaterialPage> {
    return this.post(this.segment, material)
  }

  public updateMaterial(material: IMaterial): Promise<MaterialPage> {
    return this.put(`${ this.segment }/${ material.id }`, material)
  }
}

export default new MaterialService()
