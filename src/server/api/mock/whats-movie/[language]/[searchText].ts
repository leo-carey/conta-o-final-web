import { createError } from 'h3'

import data from '@/server/data/movies.json'

const defineEventHandler = async () => {
  if (process.env.NODE_ENV !== 'production') {
    await new Promise((resolve) => setTimeout(resolve, 1000))

    return data
  } else {
    throw createError({
      statusCode: 403,
      statusMessage: 'Sai daí meu consagrado!'
    })
  }
}

export default defineEventHandler
