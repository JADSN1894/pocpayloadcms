import type { CollectionConfig } from 'payload'

export const Laboratories: CollectionConfig = {
  slug: 'laboratories',
  fields: [
    {
      name: 'laboratory',
      type: 'select',
      options: [
        {
          label: 'Mecanica',
          value: '212',
        },
        {
          label: 'Fluidos Calor e Ondas',
          value: '206',
        },
        {
          label: 'Eletricidade e Magnetismo',
          value: '210',
        },
        {
          label: 'Fisica Moderna e Fisica Eletrônica',
          value: '208',
        },
        {
          label: 'Instrumentação ao Ensino de Física',
          value: '204',
        },
        {
          label: 'Desconhecido',
          value: '999',
        },
      ],
      defaultValue: '999',
      required: true,
      unique: true,
    },
  ],
}
