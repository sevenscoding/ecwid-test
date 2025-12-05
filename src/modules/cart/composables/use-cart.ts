import { ref, computed } from 'vue'
import { CartAPI } from '@modules/cart/api'
import { parseError } from '@shared/utils/parseError'
import { useToast } from '@shared/composables/use-toast'
import type { Product } from '@modules/category/types'
import { useCartStore } from '@shared/stores/cart'
import { router } from '@app/router'
import { ROUTES } from '@app/types/routes'

const toast = useToast()

export function useCart() {
  const cartStore = useCartStore()

  const products = ref<Product[]>([])
  const isProductsLoading = ref(false)

  const getCartProducts = async (ids: number[]) => {
    isProductsLoading.value = true
    try {
      const res = await CartAPI.getProductsByIds(ids)
      products.value = res.items
    } catch (e) {
      toast.error(parseError(e))
    } finally {
      isProductsLoading.value = false
    }
  }

  const productsMap = computed(() => {
    const map: Record<number, Product> = {}
    for (const p of products.value) {
      map[p.id] = p
    }
    return map
  })

  const total = computed(() => {
    const raw = cartStore.cart.reduce((sum, item) => {
      const product = productsMap.value[item.id]
      return sum + item.qty * (product?.price ?? 0)
    }, 0)

    return Number(raw.toFixed(2))
  })

  const clearCart = () => {
    cartStore.clear()
    products.value = []
  }

  const submitOrder = () => {
    clearCart()
    isProductsLoading.value = true

    setTimeout(() => {
      toast.success('Successfully ordered!')
      isProductsLoading.value = false

      router.push(ROUTES.HOME)
    }, 2000)
  }

  return {
    products,
    productsMap,
    isProductsLoading,
    total,
    submitOrder,
    getCartProducts
  }
}
