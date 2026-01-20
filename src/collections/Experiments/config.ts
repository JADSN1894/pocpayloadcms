import type { CollectionConfig } from 'payload'

export const Experiments: CollectionConfig = {
  slug: 'experiments',
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
      name: 'description',
      type: 'text',
      required: true,
    },
    {
      name: 'laboratory',
      type: 'relationship',
      relationTo: 'laboratories',
      defaultValue: '999',
      required: true,
    },
    {
      name: 'experiment-item',
      type: 'relationship',
      relationTo: 'experiment-items',
      hasMany: true,
      required: true,
    },
  ],
}
