import { seedAdmin } from './admin.seeder'
import { seedLaboraties } from './laboratories.seeder'
import { getPayload } from 'payload'
import config from '@/payload.config'

async function main() {
  const payload = await getPayload({ config })
  try {
    await seedAdmin(payload)
    await seedLaboraties(payload)
    process.exit(0)
  } catch (error) {
    console.error(error)
    process.exit(1)
  }
}

void main()
