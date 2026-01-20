import { Payload } from 'payload'
import { env } from '@/lib/env'
import { isDuplicateError } from './utils/is-duplicate-error'

export async function seedLaboraties(payload: Payload) {
  try {
    const responseLab212 = await payload.create({
      collection: 'laboratories',
      data: {
        laboratory: '212',
      },
    })
    console.log('Laboratory created:', responseLab212)

    const responseLab206 = await payload.create({
      collection: 'laboratories',
      data: {
        laboratory: '206',
      },
    })

    console.log('Laboratory created:', responseLab206)

    const responseLab210 = await payload.create({
      collection: 'laboratories',
      data: {
        laboratory: '210',
      },
    })

    console.log('Laboratory created:', responseLab210)

    const responseLab208 = await payload.create({
      collection: 'laboratories',
      data: {
        laboratory: '208',
      },
    })

    console.log('Laboratory created:', responseLab208)

    const responseLab204 = await payload.create({
      collection: 'laboratories',
      data: {
        laboratory: '204',
      },
    })

    console.log('Laboratory created:', responseLab204)

    const responseLab999 = await payload.create({
      collection: 'laboratories',
      data: {
        laboratory: '999',
      },
    })
    console.log('Laboratory created:', responseLab999)
  } catch (error) {
    console.error('Error seeding labortatories:', JSON.stringify(error, null, 2))
  }
}
