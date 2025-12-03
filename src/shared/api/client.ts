import { TOKEN, BASE_URL } from '@shared/constants'

export class ApiClient {
  private baseUrl: string
  private token: string

  constructor(baseUrl: string, token: string) {
    this.baseUrl = baseUrl
    this.token = token
  }

  private async request<T>(url: string): Promise<T> {
    const response = await fetch(`${this.baseUrl}${url}`, {
      headers: {
        Authorization: `Bearer ${this.token}`
      }
    })

    if (!response.ok) {
      throw new Error(`API Error: ${response.status}`)
    }

    return (await response.json()) as Promise<T>
  }

  public get<T>(url: string): Promise<T> {
    return this.request<T>(url)
  }
}

export const api = new ApiClient(BASE_URL, TOKEN)
