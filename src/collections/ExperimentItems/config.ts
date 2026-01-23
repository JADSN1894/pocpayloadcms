import type { CollectionConfig } from 'payload'

export const ExperimentItems: CollectionConfig = {
  slug: 'experiment-items',
  admin: {
    useAsTitle: 'name',
  },
  labels: {
    singular: {
      en: 'Item Experiment',
      pt: 'Item do Experimento',
    },
    plural: {
      en: 'Itens Experiment',
      pt: 'Itens dos Experimentos',
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
      name: 'qtde',
      label: {
        en: 'Amount',
        pt: 'Quantidade',
      },
      type: 'number',
      defaultValue: 0,
      required: true,
    },
  ],
}
