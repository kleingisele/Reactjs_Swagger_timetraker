import { SessionService } from '..'

export abstract class BaseService {
  private apiUrl = process.env.REACT_APP_TIMETRACKER_API_URL

  protected async get(segment: string): Promise<any> {
    return this.fetch(segment, 'GET')
  }

  protected async post(segment: string, body: any): Promise<any> {
    return this.fetch(segment, 'POST', body)
  }

  protected async patch(segment: string, body: any): Promise<any> {
    return this.fetch(segment, 'PATCH', body)
  }

  protected async delete(segment: string): Promise<any> {
    return this.fetch(segment, 'DELETE')
  }

  protected async put<T = any>(segment: string, body?: any, token?: string): Promise<T> {
    return this.fetch(segment, 'PUT', body, token)
  }

  private async fetch(segment: string, method: string, body?: any, token?: string): Promise<any> {
    const options = {
      method,
      headers: this.headers(token),
      body: !body ? undefined : JSON.stringify(body)
    }

    try {
      const response = await fetch(`${ this.apiUrl }${ segment }`, options)
      if (response.ok) return this.handleResponse(response)
      else if (response.status === 401) SessionService.signOut()
      else throw new Error(response.statusText)
    } catch (error) {
      throw error
    }
  }

  private async handleResponse(response: Response): Promise<any> {
    if (this.isBlob(response)) {
      const contentDisposition = response.headers.get('Content-Disposition')
      return {
        blob: await response.blob(),
        filename: contentDisposition ? contentDisposition.split('filename=').pop().split(';')[0] : 'reports.xlxs'
      }
    } else if (response.status === 204) return null
    return response.json()
  }

  private headers(token = SessionService.token): Headers {
    const headers: { [key: string]: string } = {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }

    if (token) headers.Authorization = `Bearer ${ token }`
    return new Headers(headers)
  }

  private isBlob(response: Response): boolean {
    return response.headers.get('Content-Type') === 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
  }
}
