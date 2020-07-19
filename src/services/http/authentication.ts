import { BaseService } from './base'

class AuthenticationService extends BaseService {
  private segment = 'users'

  public signIn(username: string, password: string): Promise<any> {
    return this.post(`${ this.segment }/login`, { username, password })
  }

  public requestResetPasswordEmail(email: string): Promise<any> {
    return this.put(`${ this.segment }/password/${ email }`)
  }

  public resetPassword(username: string, password: string, token: string): Promise<any> {
    return this.put(`${ this.segment }/password`, { username, password, token })
  }

  public updateLocale(locale: string): Promise<void> {
    return this.put(`${ this.segment }/language`, locale)
  }

  public getLocale(): Promise<string> {
    return this.get(`${ this.segment }/language`)
  }
}

export default new AuthenticationService()
