export interface IQuadraticEquationsResponse {
  a: number
  b: number
  c: number
  discriminant: number
  roots: Roots | string
}

export interface Roots {
  root?: number
  root1?: number
  root2?: number
}
