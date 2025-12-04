export type Product = {
  id: number
  name: string
  price: number
  imageUrl?: string
}

export type ProductsResponse = {
  items: Product[]
}
