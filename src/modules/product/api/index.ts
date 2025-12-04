import { api } from '@shared/api/client'
import { Product } from '@modules/product/types'

export class ProductAPI {
  static async getProduct(productId: number) {
    return api.get<Product>(`/products/${productId}?responseFields=name,price,description,imageUrl`)
  }
}
