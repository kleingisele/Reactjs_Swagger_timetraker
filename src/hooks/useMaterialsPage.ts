import { useEffect, useState } from 'react'
import { IValidatedInputField, MaterialPage } from '../models'
import { MaterialService } from '../services'

export default (query: IValidatedInputField<string>, pageNumber = 1, isCreating: boolean) => {
  const [ page, setPage ] = useState<MaterialPage>()

  useEffect(() => {
    const fetch = async () => {
      if (!!query.value && !query.isValid) return
      try {
        const response = await MaterialService.getMaterials(pageNumber, false, query)
        setPage(response)
      } catch (error) {
        // tslint:disable-next-line: no-console
        console.log(error)
      }
    }

    fetch()
  }, [ pageNumber, isCreating, query ])

  return page
}
