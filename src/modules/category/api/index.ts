import { api } from '@shared/api/client'
import {
  CategoriesIdResponse,
  ProductsResponse,
  CategoryIdResponse,
  CategoryDetails
} from '@modules/category/types'

export class CategoryAPI {
  static async getAllCategories(): Promise<CategoriesIdResponse> {
    return api.get<CategoriesIdResponse>(
      '/categories?withSubcategories=false&responseFields=items(id, parentId)'
    )
  }

  static async getAllProducts(): Promise<ProductsResponse> {
    return api.get<ProductsResponse>('/products?responseFields=items(id,name,price,imageUrl)')
  }

  static async getCategoriesById(): Promise<{ items: CategoryDetails[] }> {
    const all = await CategoryAPI.getAllCategories()

    const roots = all.items.filter(cat => cat.parentId === undefined)

    const results = await Promise.allSettled(
      roots.map((cat: CategoryIdResponse) =>
        api.get<CategoryDetails>(`/categories/${cat.id}?responseFields=id,name,imageUrl`)
      )
    )

    const items: CategoryDetails[] = results.map((r, i) =>
      r.status === 'fulfilled'
        ? r.value
        : {
            id: roots[i].id,
            name: '',
            imageUrl: undefined
          }
    )

    return { items }
  }
}
