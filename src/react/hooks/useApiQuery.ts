import { UseQueryResult, queryOptions, useQuery } from '@tanstack/react-query'
import axios, { AxiosResponse } from 'axios'
import { FetchMethod } from '../types/FetchMethod'

type Query<T> = (queryKeys: Array<string> | string, endpoint: string, method?: FetchMethod) => T
const useApiQuery: Query<UseQueryResult> = (
  queryKeys: Array<string> | string,
  endpoint: string,
  method: FetchMethod = 'get'
) => {
  const options = queryOptions({
    queryKey: typeof queryKeys === 'string' ? [queryKeys] : queryKeys,
    queryFn: async () => {
      const response: AxiosResponse = await axios[method](`${import.meta.env.VITE_API_URL}${endpoint}`)

      if (response.status !== 200) {
        throw new Error('Network error')
      }

      return response.data
    },
  })

  return useQuery(options)
}

export default useApiQuery
