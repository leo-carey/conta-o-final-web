import axios from 'axios'

import environmentConfig from '@/services/environment-config'

class ApiService {
  static searchMovie(language: string, searchText: string) {
    const uri = environmentConfig.searchMovie
      .replace(':language', language)
      .replace(':searchText', searchText)

    return axios.get(uri)
  }

  static getSpoiler(language: string, movieName: string) {
    const uri = environmentConfig.searchMovie
      .replace(':language', language)
      .replace(':movieName', movieName)

    return axios.get(uri)
  }
}

export default ApiService
