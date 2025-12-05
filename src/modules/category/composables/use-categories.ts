import { ref } from 'vue'
import { CategoryAPI } from '@modules/category/api'
import { useToast } from '@shared/composables/use-toast'
import { parseError } from '@shared/utils/parseError'
import type { CategoryDetails } from '@modules/category/types'

const toast = useToast()

export function useCategories() {
  const categories = ref<CategoryDetails[]>([])
  const categoryName = ref('')
  const parentCategoryId = ref<number | null>(null)
  const loadingCategories = ref(false)

  const getCategories = async (parentId: number = 0) => {
    loadingCategories.value = true
    try {
      const res = await CategoryAPI.getCategories(parentId)
      categories.value = res.items
    } catch (e) {
      toast.error(parseError(e))
    } finally {
      loadingCategories.value = false
    }
  }

  const getSubcategoryNameById = async (categoryId: number = 0) => {
    loadingCategories.value = true
    try {
      const res = await CategoryAPI.getCategoryNameById(categoryId)

      if (res?.name) {
        categoryName.value = res.name
        parentCategoryId.value = res.parentId ?? null
      }
    } catch (e) {
      toast.error(parseError(e))
    } finally {
      loadingCategories.value = false
    }
  }

  return {
    categories,
    loadingCategories,
    categoryName,
    parentCategoryId,
    getCategories,
    getSubcategoryNameById
  }
}
