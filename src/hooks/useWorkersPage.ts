import { useEffect, useState } from 'react'
import { IValidatedInputField, WorkerPage } from '../models'
import { WorkerService } from '../services'

export default (query: IValidatedInputField<string>, pageNumber = 1, isCreating: boolean) => {
  const [ page, setPage ] = useState<WorkerPage>()

  useEffect(() => {
    const fetch = async () => {
      if (!!query.value && !query.isValid) return
      try {
        const response = await WorkerService.getWorkers(pageNumber, false, query)
        setPage(response)
      } catch (error) {
        // tslint:disable-next-line: no-console
        console.error(error)
      }
    }

    fetch()
  }, [ pageNumber, isCreating, query ])

  return page
}
