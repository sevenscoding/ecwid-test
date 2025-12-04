import { api } from '@shared/api/client'
import { CategoryDetails, Product } from '@modules/category/types'
import { ListResponse } from '@shared/types'

export class CategoryAPI {
  static async getCategories(parentId: number) {
    return api.get<ListResponse<CategoryDetails>>(
      `/categories?parent=${parentId}&responseFields=items(id,name,imageUrl)`
    )
  }

  static async getCategoryNameById(categoryId: number) {
    return api.get<CategoryDetails>(`/categories/${categoryId}?responseFields=name,parentId`)
  }

  static async getAllProducts() {
    return api.get<ListResponse<Product>>('/products?responseFields=items(id,name,price,imageUrl)')
  }

  static async getProductsByCategoryId(categoryId: number) {
    return api.get<ListResponse<Product>>(
      `/products?category=${categoryId}&responseFields=items(id,name,price,imageUrl)`
    )
  }
}
