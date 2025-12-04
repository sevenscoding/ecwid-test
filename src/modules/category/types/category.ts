export type CategoryIdResponse = {
  id: number
  parentId: number
}

export type CategoryDetails = {
  id: number
  name: string
  imageUrl?: string
}

export type CategoriesIdResponse = {
  items: CategoryIdResponse[]
}
