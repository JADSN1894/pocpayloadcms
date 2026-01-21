import { faker } from '@faker-js/faker'
import { Payload } from 'payload'
import { createMediaFromImageUrl } from './utils/create-media-from-image-url'

export async function seedExperimentsItems(payload: Payload) {
  for (let index = 0; index < 5; index++) {
    try {
      const name = faker.lorem.sentence()
      const qtde = faker.number.int()

      await payload.create({
        collection: 'experiment-items',
        data: {
          name,
          qtde,
        },
        draft: true,
      })

      console.log('ExperimentItem created')
    } catch (error) {
      console.error('Failed to seed experiment item', error)
    }
  }
}
