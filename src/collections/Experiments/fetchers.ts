import { getPayload } from 'payload'
import config from '@/payload.config'

export async function getExperiments() {
  const payload = await getPayload({ config })

  try {
    const { docs: experiments } = await payload.find({
      collection: 'experiments',
      sort: ['id'],
      // limit: 1,
      // pagination: false,
    })

    return experiments ?? []
  } catch (error) {
    console.error('Failed to fetch experiments', error)
    return []
  }
}

export async function getExperimentById(id: number) {
  const payload = await getPayload({ config })

  try {
    const { docs: experiments } = await payload.find({
      collection: 'experiments',
      where: { id: { equals: id } },
      limit: 1,
      pagination: false,
    })

    return experiments ?? null
  } catch (error) {
    console.error('Failed to fetch experiments', error)
    return []
  }
}
