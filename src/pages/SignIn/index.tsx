import { Button, Input } from '@valudio/ui'
import React, { useState } from 'react'
import { useIntl } from 'react-intl'
import { useHistory } from 'react-router-dom'
import Icon from '../../components/Icon'
import Page from '../../components/Page'
import { urls } from '../../routing'
import { SessionService } from '../../services'
import { Link, Section } from './styles'

const SignIn: React.FC = () => {
  const { formatMessage } = useIntl()
  const { push } = useHistory()
  const [ email, setEmail ] = useState('')
  const [ password, setPassword ] = useState('')

  const handleSignIn = async () => {
    await SessionService.signIn(email, password)
    push(urls.timeReports)
  }

  const isSignInDisabled = email.length < 4 || password.length < 4

  return (
    <Page style={{ flexDirection: 'row', height: '100vh' }}>
      <Section style={{ backgroundColor: '#44444D' }}>
        <Icon style={{ width: 275 }} icon="logo" className="logo" />
      </Section>
      <Section style={{ backgroundColor: 'white' }}>
        <Input placeholder="email" onChange={ setEmail } style={{ marginBottom: 20, width: 350 }} />
        <Input placeholder="password" type="password" onChange={ setPassword } style={{ marginBottom: 30, width: 350 }} />
        <Button onClick={ handleSignIn } isDisabled={ isSignInDisabled } style={{ marginBottom: 20 }}>Let's go</Button>
        <Link href={ urls.timeReports }>{ formatMessage({ id: 'forgotPassword' }) }</Link>
      </Section>
    </Page>
  )
}

export default SignIn
