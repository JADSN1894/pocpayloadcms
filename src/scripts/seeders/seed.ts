import { seedAdmin } from './admin.seeder'
import { seedLaboraties } from './laboratories.seeder'
import { getPayload } from 'payload'
import config from '@/payload.config'
import { seedExperimentsItems } from './experimentItems.seeder'
import { seedExperiments } from './experiments.seeder'

async function main() {
  const payload = await getPayload({ config })
  try {
    await seedAdmin(payload)
    await seedLaboraties(payload)
    await seedExperimentsItems(payload)
    await seedExperiments(payload)
    process.exit(0)
  } catch (error) {
    console.error(error)
    process.exit(1)
  }
}

void main()
