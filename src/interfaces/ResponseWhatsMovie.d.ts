
export type ItemResponseWhatsMovie = {
  id: number
  title: string
  poster: string
  poster2: string
  description: string
}

export type ResponseWhatsMovie = {
  success: boolean
  items: Array<ItemResponseWhatsMovie>
  totalResults: number
  pages: number
  currentPage: number
}
