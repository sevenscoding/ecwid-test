export type CategoryIdResponse = {
  id: number
}

export type CategoryDetails = {
  id: number
  name: string
  imageUrl?: string
}

export type CategoriesIdResponse = {
  items: CategoryIdResponse[]
}
