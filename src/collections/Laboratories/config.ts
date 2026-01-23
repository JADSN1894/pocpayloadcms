import type { CollectionConfig } from 'payload'

export const Laboratories: CollectionConfig = {
  slug: 'laboratories',
  labels: {
    singular: {
      en: 'Laboratory',
      pt: 'Laboratório',
    },
    plural: {
      en: 'Laboratories',
      pt: 'Laboratórios',
    },
  },
  admin: {
    useAsTitle: 'laboratory',
  },
  defaultSort: '-id',
  access: {
    // Prevent all users from creating new documents
    create: () => false,
    read: () => true,
    update: () => false,
    delete: () => false,
  },
  fields: [
    {
      name: 'laboratory',
      label: {
        en: 'Laboratory',
        pt: 'Laboratório',
      },
      type: 'select',
      options: [
        {
          label: 'Mecanica',
          value: 'Mecanica - 212',
        },
        {
          label: 'Fluidos Calor e Ondas',
          value: 'Fluidos Calor e Ondas - 206',
        },
        {
          label: 'Eletricidade e Magnetismo',
          value: 'Eletricidade e Magnetismo - 210',
        },
        {
          label: 'Fisica Moderna e Fisica Eletrônica',
          value: 'Fisica Moderna e Fisica Eletrônica - 208',
        },
        {
          label: 'Instrumentação ao Ensino de Física',
          value: 'Instrumentação ao Ensino de Física - 204',
        },
        {
          label: 'Desconhecido',
          value: 'Desconhecido - 999',
        },
      ],
      defaultValue: 'Desconhecido - 999',
      required: true,
      unique: true,
    },
  ],
}
