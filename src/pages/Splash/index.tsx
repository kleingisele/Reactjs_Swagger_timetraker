import { Spinner } from '@valudio/ui'
import React from 'react'
import { useHistory } from 'react-router-dom'
import Page from '../../components/Page'
import { sleep } from '../../helpers/dom'
import { urls } from '../../routing'
import { SessionService } from '../../services'

const Splash: React.FC = () => {
  const { push } = useHistory()

  const checkSession = async () => {
    await sleep(1000)
    SessionService.isSessionActive
      ? push(urls.timeReports)
      : push(urls.signIn)
  }

  checkSession()

  return (
    <Page>
      <Spinner />
    </Page>
  )
}

export default Splash
