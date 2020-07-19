export interface IPagination {
  pageNumber: number
  size: number
  totalItems: number
  totalPages: number
}

export interface IItemPage<T> {
  pagination: IPagination
  items: T[]
}

export interface IReportItemPage<T> extends IItemPage<T> {
  totalTime: string
  startDate: string
  endDate: string
}

export const emptyPage: IItemPage<any> = {
  pagination: null,
  items: null
}

export const emptyReportPage: IReportItemPage<any> = {
  pagination: null,
  items: [],
  totalTime: null,
  startDate: null,
  endDate: null
}
