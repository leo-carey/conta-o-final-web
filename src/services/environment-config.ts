/**
 * ENV configuration API URI
 */
const runtimeConfig = useRuntimeConfig()
const apiUrl = runtimeConfig.API_BASE_URL

const environmentConfig = {
  searchMovie: `${apiUrl}/whats-movie/:language/:searchText`,
  spoiler: `${apiUrl}/spoiler/:language/:movieName`
}

export default environmentConfig
