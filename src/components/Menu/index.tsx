import { ILanguage, Menu as UIMenu, MenuItem } from '@valudio/ui'
import React, { useEffect, useState } from 'react'
import { injectIntl, useIntl } from 'react-intl'
import { updateIntl } from 'react-intl-redux'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { literals } from '../../literals'
import { urls } from '../../routing'
import { SessionService } from '../../services'

const Menu: React.FC = () => {
  const dispatch = useDispatch()
  const { formatMessage } = useIntl()
  const { push } = useHistory()
  const [ username, setUsername ] = useState('')
  const isMobileViewWidth = window.screen.width <= 736
  const languages: ILanguage[] = [
    { locale: 'en-US', label: 'english' },
    { locale: 'fr-FR', label: 'french' },
    { locale: 'es-ES', label: 'spanish' }
  ]

  const handleLanguageClick = async (locale: string) => {
    dispatch(updateIntl({ locale, messages: literals[locale] }))
  }

  const handleNavigate = (url: string) => {
    push(url)
  }

  const handleSignOut = () => {
    SessionService.signOut()
    push(urls.signIn)
  }

  useEffect(() => {
    const fetch = async () => {
      const s = await SessionService.getSession()
      setUsername(s.name)
    }

    fetch()
  }, [])

  return (
    <UIMenu
      username={ username }
      languages={ languages }
      onLanguageClick={ handleLanguageClick }
      isHidden={ !SessionService.isSessionActive || isMobileViewWidth }
      logoSrc={ '/assets/icons/logo.svg' }
      onSignOut={ handleSignOut }
    >
      <MenuItem onClick={ handleNavigate.bind(undefined, urls.timeReports) } label={ formatMessage({ id: 'reports' }) } icon="dashboard" />
      <MenuItem onClick={ handleNavigate.bind(undefined, urls.workers) } label={ formatMessage({ id: 'workers' }) } icon="workers" />
      <MenuItem onClick={ handleNavigate.bind(undefined, urls.materials) } label={ formatMessage({ id: 'materials' }) } icon="material" />
      <MenuItem onClick={ handleNavigate.bind(undefined, urls.projects) } label={ formatMessage({ id: 'projects' }) } icon="projects" />
    </UIMenu>
  )
}

export default injectIntl(Menu)
