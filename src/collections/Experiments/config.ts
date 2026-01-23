import type { CollectionConfig } from 'payload'

export const Experiments: CollectionConfig = {
  slug: 'experiments',
  admin: {
    useAsTitle: 'name',
  },
  labels: {
    singular: {
      en: 'Experiment',
      pt: 'Experimento',
    },
    plural: {
      en: 'Experiments',
      pt: 'Experimentos',
    },
  },
  access: {
    // Prevent all users from creating new documents
    read: () => true,
    create: () => false,
    update: () => false,
    delete: () => false,
  },
  defaultSort: '-id',
  fields: [
    {
      name: 'name',
      label: {
        en: 'Name',
        pt: 'Nome',
      },
      type: 'text',
      defaultValue: 'Desconhecido',
      required: true,
      unique: true,
    },
    {
      name: 'description',
      label: {
        en: 'Description',
        pt: 'Descrição',
      },
      type: 'richText',
      required: true,
    },
    {
      name: 'laboratory',
      label: {
        en: 'Laboratory',
        pt: 'Laboratório',
      },
      type: 'relationship',
      relationTo: 'laboratories',
      defaultValue: '999',
      required: true,
    },
    {
      name: 'photo',
      label: {
        en: 'Photo',
        pt: 'Foto',
      },
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'experimentItems',
      label: {
        en: 'Experiment Itens',
        pt: 'Itens do Experimento',
      },
      type: 'relationship',
      relationTo: 'experiment-items',
      hasMany: true,
      required: true,
    },
  ],
}
