export interface ISearchParams {
  keywords: string & number
}

export interface ISearch {
  search: (params: ISearchParams) => Promise<unknown>
}
