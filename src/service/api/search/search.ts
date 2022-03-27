import http from '@/service/http'
import * as T from './types'

const searchAPI: T.ISearch = {
  search(params: unknown) {
    return http.get('./search', params)
  },
}
