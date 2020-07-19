import { useEffect, useState } from 'react'
import { ICustomer } from '../models'
import { CustomerService } from '../services'

export default () => {
  const [ customers, setCustomers ] = useState<ICustomer[]>()

  useEffect(() => {
    const fetch = async () => {
      try {
        const response = await CustomerService.getCustomers()
        setCustomers(response.items)
      } catch (error) {
        // tslint:disable-next-line: no-console
        console.log(error)
      }
    }

    fetch()
  }, [])

  return customers
}
