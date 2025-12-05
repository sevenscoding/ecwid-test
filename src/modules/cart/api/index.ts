import { api } from '@shared/api/client'
import { ListResponse } from '@shared/types'
import { Product } from '@modules/product/types'

export class CartAPI {
  static async getProductsByIds(ids: number[]) {
    const query = ids.join(',')
    return api.get<ListResponse<Product>>(
      `/products?productId=${query}&responseFields=items(id,name,price,imageUrl)`
    )
  }
}
