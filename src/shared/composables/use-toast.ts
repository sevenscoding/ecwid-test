import { ref } from 'vue'

const messages = ref<string[]>([])

export function useToast() {
  const error = (message: string) => {
    messages.value.push(message)

    setTimeout(() => {
      messages.value.shift()
    }, 3000)
  }

  return {
    messages,
    error
  }
}
