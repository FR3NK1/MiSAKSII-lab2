import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const MathService = createApi({
  reducerPath: 'MathService',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/api/' }),
  endpoints: () => ({}),
})
