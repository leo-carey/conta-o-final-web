import { createError, readBody, H3Event } from 'h3'

import data from '@/server/data/spoiler.json'

const defineEventHandler = async (event: H3Event) => {
  if (process.env.NODE_ENV !== 'production' && event.req.method === 'POST') {
    await new Promise((resolve) => setTimeout(resolve, 1000))

    const body = await readBody(event)

    const thatsNotOK =
      _validateParams(body.id) &&
      _validateParams(body.title) &&
      _validateParams(body.description) &&
      _validateParams(body.poster) &&
      _validateParams(body.poster2)

    if (thatsNotOK)
      throw createError({
        statusCode: 403,
        statusMessage: 'Manda esses parâmetro direito pow!'
      })

    return data
  } else {
    throw createError({
      statusCode: 403,
      statusMessage: 'Sai daí meu consagrado!'
    })
  }
}

const _validateParams = (param: any) => {
  return param === undefined
}

export default defineEventHandler
