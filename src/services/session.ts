import jwtDecode from 'jwt-decode'
import { store } from '../components/Provider'
import { ISession } from '../models'
import { setSessionAction } from '../store/actions'
import { AuthenticationService } from './http'

class SessionService {
  private sessionTokenKey = 'timetracker-session-token'
  private refreshTokenKey = 'timetracker-refresh-token'

  public get token(): string {
    return localStorage.getItem(this.sessionTokenKey)
  }

  public get refToken(): string {
    return localStorage.getItem(this.refreshTokenKey)
  }

  public get isSessionActive(): boolean {
    return !!this.token
  }

  public async signIn(email, password): Promise<ISession> {
    const response = await AuthenticationService.signIn(email, password)
    return this.setSession(response)
  }

  public getSession(): Promise<ISession> {
    if (!this.isSessionActive) return null
    const data = jwtDecode(this.token)
    return this.formatSession(data)
  }

  public signOut(): void {
    localStorage.removeItem(this.sessionTokenKey)
    localStorage.removeItem(this.refreshTokenKey)
    store.dispatch(setSessionAction(null))
  }

  private setSession(response: any): Promise<ISession> {
    const data = jwtDecode(response.token)
    localStorage.setItem(this.sessionTokenKey, response.token)
    localStorage.setItem(this.refreshTokenKey, response.refreshToken)
    return this.formatSession(data)
  }

  private async formatSession(data: any): Promise<ISession> {
    return {
      role: data['http://schemas.microsoft.com/ws/2008/06/identity/claims/role'],
      name: data['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name'],
      workspaceId: data.WorkspaceId,
      entryModeByHours: data.EntryModeByHours === 'True',
      locale: await AuthenticationService.getLocale()
    }
  }
}

export default new SessionService()
