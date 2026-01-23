import type { CollectionConfig } from 'payload'

export const Users: CollectionConfig = {
  slug: 'users',
  labels: {
    singular: {
      en: 'User',
      pt: 'Usuário',
    },
    plural: {
      en: 'Users',
      pt: 'Usuários',
    },
  },
  admin: {
    useAsTitle: 'email',
  },
  access: {
    // Prevent all users from creating new documents
    create: () => false,
    read: () => true,
    update: () => false,
    delete: () => false,
  },
  auth: true,
  fields: [
    // Email added by default
    // Add more fields as needed
  ],
}
