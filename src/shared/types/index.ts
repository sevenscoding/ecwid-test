export type ListResponse<T> = {
  total: number
  count?: number
  offset: number
  limit: number
  items: T[]
}
