import { createError } from 'h3'

import data from '@/server/data/movies.json'

const defineEventHandler = () => {
  if (process.env.NODE_ENV !== 'production') {
    return data
  } else {
    throw createError({
      statusCode: 403,
      statusMessage: 'Sai daí meu consagrado!'
    })
  }
}

export default defineEventHandler
