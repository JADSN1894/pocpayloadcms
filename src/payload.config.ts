import { postgresAdapter } from '@payloadcms/db-postgres'
import { FixedToolbarFeature, lexicalEditor } from '@payloadcms/richtext-lexical'
import { en } from '@payloadcms/translations/languages/en'
import { pt } from '@payloadcms/translations/languages/pt'
import { vercelBlobStorage } from '@payloadcms/storage-vercel-blob'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'
import { env } from './lib/env'
import { Users } from './collections/Users'
import { Media } from './collections/Media'
import { Laboratories } from './collections/Laboratories/config'
import { Experiments } from './collections/Experiments/config'
import { ExperimentItems } from './collections/ExperimentItems/config'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
    autoLogin: {
      email: env.CMS_SEED_ADMIN_EMAIL,
      password: env.CMS_SEED_ADMIN_PASSWORD,
    },
  },
  i18n: {
    supportedLanguages: { en, pt },
    fallbackLanguage: 'pt',
  },
  collections: [Users, Media, Laboratories, Experiments, ExperimentItems],
  editor: lexicalEditor({
    features: ({ defaultFeatures }) => [...defaultFeatures, FixedToolbarFeature()],
  }),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URL || '',
    },
  }),
  sharp,
  plugins: [
    vercelBlobStorage({
      enabled: true,
      collections: { media: true },
      token: process.env.BLOB_READ_WRITE_TOKEN, // From Vercel dashboard
    }),
  ],
})
