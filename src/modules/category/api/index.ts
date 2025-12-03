import { api } from '@shared/api/client'

export class CategoryAPI {
  static async getAllCategories() {
    return api.get('/categories')
  }

  static async getAllProducts() {
    return api.get('/products')
  }
}
