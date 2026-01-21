import { getExperimentById, getExperiments } from '@/collections/Experiments/fetchers'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { Suspense } from 'react'

export default async function ExperimentByIdPage({
  params,
}: {
  params: Promise<{ experimentId: number }>
}) {
  const { experimentId } = await params

  console.log('experimentId')
  console.log(experimentId)
  const experiments = await getExperimentById(experimentId)
  console.log('experiments.length')
  console.log(experiments.length)

  if (!experiments) {
    return <p>No experiments</p>
  }

  if (experiments.length === 0) {
    return <p className="mt-2 ml-2">No experiments at this laboratory</p>
  }

  return (
    <div className="bg-background h-full w-full flex justify-center align-middle">
      <Suspense fallback={<div>Loading...</div>}>
        <div className="grid grid-rows-5 grid-cols-1 place-self-center gap-2">
          {experiments.map(({ id, name }) => (
            <Link key={id} href="/experiments">
              <Button className="w-full">{name}</Button>
            </Link>
          ))}
        </div>
      </Suspense>
    </div>
  )
}
