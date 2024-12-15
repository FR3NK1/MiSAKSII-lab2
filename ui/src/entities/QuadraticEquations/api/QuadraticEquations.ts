import { MathService } from '../../../app/services/MathService'
import { IQuadraticEquationsRequest } from '../model/IQuadraticEquationsRequest'
import { IQuadraticEquationsResponse } from '../model/IQuadraticEquationsResponse'

const QuadraticEquationsApi = MathService.injectEndpoints({
  endpoints: (build) => ({
    getQuadraticEquationsRootsAndDiscriminant: build.query<
      IQuadraticEquationsResponse,
      IQuadraticEquationsRequest
    >({
      query: (data) => ({
        url: `/get-roots`,
        params: data,
      }),
    }),
  }),
})

export const { useLazyGetQuadraticEquationsRootsAndDiscriminantQuery } = QuadraticEquationsApi
