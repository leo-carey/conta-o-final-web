import axios from 'axios'

import { ItemResponseWhatsMovie } from 'interfaces/ResponseWhatsMovie'

class ApiService {
  static searchMovie(apiUrl: string, language: string, searchText: string) {
    const uri = `${apiUrl}/whats-movie/${language.replace(
      '_',
      '-'
    )}/${searchText}`
    return axios.get(uri)
  }

  static getSpoiler(
    apiUrl: string,
    language: string,
    movie: ItemResponseWhatsMovie
  ) {
    const uri = `${apiUrl}/spoiler/${language.replace('_', '-')}/${movie.title}`
    return axios.post(uri, movie)
  }
}

export default ApiService
