export interface IAviatorDispatchAction {
  matchedRoute?: string
  namedParams?: { [key: string]: any }
  params?: { [key: string]: any }
  queryParams?: { [key: string]: any }
  queryString?: string
  uri?: string
}
