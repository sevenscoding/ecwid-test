import { api } from '@shared/api/client'
import {
  CategoriesInfoResponse,
  ProductsResponse,
  CategoryIdResponse,
  CategoryDetails
} from '@modules/category/types'

export class CategoryAPI {
  static async getAllCategories(): Promise<CategoriesInfoResponse> {
    return api.get<CategoriesInfoResponse>('/categories?responseFields=items(id)')
  }

  static async getAllProducts(): Promise<ProductsResponse> {
    return api.get('/products')
  }

  static async getCategoriesById(): Promise<{ items: CategoryDetails[] }> {
    const all = await CategoryAPI.getAllCategories()

    const results = await Promise.allSettled(
      all.items.map((cat: CategoryIdResponse) =>
        api.get<CategoryDetails>(`/categories/${cat.id}?responseFields=id,name,imageUrl`)
      )
    )

    const items: CategoryDetails[] = results.map((r, i) =>
      r.status === 'fulfilled'
        ? r.value
        : {
            id: all.items[i].id,
            name: '',
            imageUrl: undefined
          }
    )

    return { items }
  }
}
