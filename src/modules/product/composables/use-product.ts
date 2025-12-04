import { ref } from 'vue'
import { ProductAPI } from '@modules/product/api'
import { parseError } from '@shared/utils/parseError'
import { Product } from '@modules/product/types'
import { useToast } from '@shared/composables/use-toast'

const toast = useToast()

export function useProduct() {
  const product = ref<Product | null>(null)
  const loadingProduct = ref(false)

  const getProduct = async (parentId: number = 0) => {
    loadingProduct.value = true
    try {
      product.value = await ProductAPI.getProduct(parentId)
    } catch (e) {
      toast.error(parseError(e))
    } finally {
      loadingProduct.value = false
    }
  }

  return {
    product,
    loadingProduct,
    getProduct
  }
}
