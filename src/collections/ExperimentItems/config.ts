import type { CollectionConfig } from 'payload'

export const ExperimentItems: CollectionConfig = {
  slug: 'experiment-items',
  admin: {
    useAsTitle: 'name',
  },
  defaultSort: '-id',
  fields: [
    {
      name: 'name',
      type: 'text',
      defaultValue: 'Desconhecido',
      required: true,
      unique: true,
    },
    {
      name: 'qtde',
      type: 'number',
      defaultValue: 0,
      required: true,
    },
  ],
}
