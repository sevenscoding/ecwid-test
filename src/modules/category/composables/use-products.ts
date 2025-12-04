import { ref } from 'vue'
import { CategoryAPI } from '@modules/category/api'
import { useToast } from '@shared/composables/use-toast'
import { parseError } from '@shared/utils/parseError'
import type { Product } from '@modules/category/types'

export function useProducts() {
  const products = ref<Product[]>([])
  const loadingProducts = ref(false)
  const toast = useToast()

  const getProducts = async () => {
    loadingProducts.value = true
    try {
      const res = await CategoryAPI.getAllProducts()
      products.value = res.items
    } catch (e) {
      toast.error(parseError(e))
    } finally {
      loadingProducts.value = false
    }
  }

  const getProductsByCategoryId = async (id: number) => {
    loadingProducts.value = true
    try {
      const res = await CategoryAPI.getProductsByCategoryId(id)
      products.value = res.items
    } catch (e) {
      toast.error(parseError(e))
    } finally {
      loadingProducts.value = false
    }
  }

  return {
    products,
    loadingProducts,
    getProductsByCategoryId,
    getProducts
  }
}
