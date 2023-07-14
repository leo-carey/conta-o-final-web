import axios from 'axios'

class ApiService {
  static searchMovie(apiUrl: string, language: string, searchText: string) {
    const uri = `${apiUrl}/whats-movie/${language}/${searchText}` // environmentConfig.searchMovie
    return axios.get(uri)
  }

  // static getSpoiler(language: string, movieName: string) {
  //   const uri = environmentConfig.searchMovie
  //     .replace(':language', language)
  //     .replace(':movieName', movieName)

  //   return axios.get(uri)
  // }
}

export default ApiService
