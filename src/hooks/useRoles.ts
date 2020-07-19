import { useEffect, useState } from 'react'
import { IRole } from '../models'
import { RoleService } from '../services'

export default () => {
  const [ roles, setRoles ] = useState<IRole[]>()

  useEffect(() => {
    const fetch = async () => {
      try {
        const response = await RoleService.getRoles()
        setRoles(response)
      } catch (error) {
        // tslint:disable-next-line: no-console
        console.error(error)
      }
    }

    fetch()
  }, [])

  return roles
}
