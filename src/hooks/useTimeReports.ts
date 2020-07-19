import { useEffect, useState } from 'react'
import { IFilters, TimeRecordPage } from '../models'
import { TimeRecordsService } from '../services'

export default (pageNumber = 1, filters: IFilters) => {
  const [ page, setPage ] = useState<TimeRecordPage>()

  useEffect(() => {
    const fetch = async () => {
      try {
        const response = await TimeRecordsService.getTimeRecords2(pageNumber, filters)
        setPage(response)
      } catch (error) {
        // tslint:disable-next-line: no-console
        console.error(error)
      }
    }

    fetch()
  }, [ pageNumber, filters ])

  return page
}
