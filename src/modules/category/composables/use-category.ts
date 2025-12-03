import { ref, onBeforeMount } from 'vue'
import { CategoryAPI } from '@modules/category/api'
import { useToast } from '@shared/composables/use-toast'

export function useCategory() {
  const categories = ref([])
  const products = ref([])
  const loading = ref(false)

  const toast = useToast()

  const fetchCatalog = async () => {
    loading.value = true

    try {
      const [cats, prods] = await Promise.all([
        CategoryAPI.getAllCategories(),
        CategoryAPI.getAllProducts()
      ])

      categories.value = cats.items
      products.value = prods.items
    } catch (e: any) {
      const msg = e.message || 'Failed to load catalog'
      toast.error(msg)
    } finally {
      loading.value = false
    }
  }

  onBeforeMount(fetchCatalog)

  return {
    categories,
    products,
    loading,
    fetchCatalog
  }
}
