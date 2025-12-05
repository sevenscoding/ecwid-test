import { ref } from 'vue'
import { CartAPI } from '@modules/cart/api'
import { parseError } from '@shared/utils/parseError'
import { useToast } from '@shared/composables/use-toast'

const toast = useToast()

export function useCart() {
  const products = ref()
  const isProductsLoading = ref(false)

  const getCartProducts = async (ids: number[]) => {
    isProductsLoading.value = true
    try {
      products.value = await CartAPI.getProductsByIds(ids)
    } catch (e) {
      toast.error(parseError(e))
    } finally {
      isProductsLoading.value = false
    }
  }

  return {
    products,
    isProductsLoading,
    getCartProducts
  }
}
