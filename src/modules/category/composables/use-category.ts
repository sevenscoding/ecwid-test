import { ref } from 'vue'
import { CategoryAPI } from '@modules/category/api'
import { useToast } from '@shared/composables/use-toast'
import { parseError } from '@shared/utils/parseError'
import { Product, CategoryDetails } from '@modules/category/types'

const toast = useToast()

export function useCategory() {
  const categories = ref<CategoryDetails[]>([])
  const products = ref<Product[]>([])
  const loading = ref(false)

  const fetchCatalog = async () => {
    loading.value = true

    try {
      const [cats, prods] = await Promise.all([
        CategoryAPI.getCategoriesById(),
        CategoryAPI.getAllProducts()
      ])

      categories.value = cats.items
      products.value = prods.items
    } catch (e: unknown) {
      toast.error(parseError(e))
    } finally {
      loading.value = false
    }
  }

  return {
    categories,
    products,
    loading,
    fetchCatalog
  }
}
