import { getPayload } from 'payload'
import config from '@/payload.config'

export async function getLaboratories() {
  const payload = await getPayload({ config })

  try {
    const { docs: laboratories } = await payload.find({
      collection: 'laboratories',
      where: { id: { not_equals: 6 } },
      sort: ['id'],
      select: {
        laboratory: true,
      },
    })

    return laboratories ?? []
  } catch (error) {
    console.error('Failed to fetch laboratories', error)
    return []
  }
}
