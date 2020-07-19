import React from 'react'
import { Route as RRDRoute, RouteProps, useHistory } from 'react-router-dom'
import { urls } from '../../routing'
import { SessionService } from '../../services'

interface IProps extends RouteProps {
  isAuthenticated: boolean
}

const Route: React.FC<IProps> = ({ isAuthenticated, ...props }) => {
  const { push } = useHistory()
  const isSessionActive = SessionService.isSessionActive
  if (isSessionActive && !isAuthenticated) push(urls.timeReports)
  else if (!isSessionActive && isAuthenticated) push(urls.signIn)

  return <RRDRoute { ...props } />
}

export default Route
