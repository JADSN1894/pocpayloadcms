import { faker } from '@faker-js/faker'
import { Payload } from 'payload'
import config from '@/payload.config'
import { createMediaFromImageUrl } from './utils/create-media-from-image-url'
import { convertMarkdownToLexical, editorConfigFactory } from '@payloadcms/richtext-lexical'

export async function seedExperiments(payload: Payload) {
  for (let index = 0; index < 5; index++) {
    try {
      const imageUrl = faker.image.urlPicsumPhotos({ width: 256, height: 256 })
      const photo = await createMediaFromImageUrl(payload, imageUrl)
      if (!photo) {
        console.warn('Stopped seeding article author because no image was created')
        return
      }

      const name = faker.lorem.sentence()
      const description = faker.lorem.paragraphs(3)

      const descriptionLexical = convertMarkdownToLexical({
        markdown: description,
        editorConfig: await editorConfigFactory.default({ config: await config }),
      })

      const laboratory = faker.number.int({ min: 1, max: 5 })
      const experimentItems = faker.helpers.multiple(() => faker.number.int({ min: 1, max: 5 }), {
        count: 3,
      })

      await payload.create({
        collection: 'experiments',
        data: {
          name,
          description: descriptionLexical,
          photo: photo.id,
          laboratory,
          experimentItems,
        },
        draft: true,
      })

      console.log('Experiment created')
    } catch (error) {
      console.error('Failed to seed experiment', error)
    }
  }
}
