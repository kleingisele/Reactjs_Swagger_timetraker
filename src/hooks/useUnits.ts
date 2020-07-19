import { useEffect, useState } from 'react'
import { IUnit } from '../models/unit'
import { UnitService } from '../services'

export default () => {
  const [ units, setUnits ] = useState<IUnit[]>()

  useEffect(() => {
    const fetch = async () => {
      try {
        const response = await UnitService.getUnits()
        setUnits(response)
      } catch (error) {
        // tslint:disable-next-line: no-console
        console.log(error)
      }
    }

    fetch()
  }, [])

  return units
}
