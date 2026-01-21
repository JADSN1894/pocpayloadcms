import { getExperiments } from '@/collections/Experiments/fetchers'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { Suspense } from 'react'

export default async function ExperimentsPage() {
  const experiments = await getExperiments()
  if (!experiments.length) {
    return <p>No experiments found</p>
  }

  return (
    <div className="bg-background h-full w-full flex justify-center align-middle">
      <Suspense fallback={<div>Loading...</div>}>
        <div className="grid grid-rows-5 grid-cols-1 place-self-center gap-2">
          {experiments.map(({ id, name, photo, laboratory, experimentItems }) => (
            <Link key={id} href="/experiments">
              <Button className="w-full">{name}</Button>
            </Link>
          ))}
        </div>
      </Suspense>
    </div>
  )
}
