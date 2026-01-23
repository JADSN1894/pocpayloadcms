import type { CollectionConfig } from 'payload'

export const Media: CollectionConfig = {
  slug: 'media',
  labels: {
    singular: {
      en: 'Media',
      pt: 'Imagen',
    },
    plural: {
      en: 'Medias',
      pt: 'Imagens',
    },
  },
  access: {
    // Prevent all users from creating new documents
    read: () => true,
    create: () => false,
    update: () => false,
    delete: () => false,
  },
  fields: [
    {
      name: 'alt',
      type: 'text',
      required: true,
    },
  ],
  upload: true,
}
