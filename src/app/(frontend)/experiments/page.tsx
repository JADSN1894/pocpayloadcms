import { getExperiments } from '@/collections/Experiments/fetchers'
import Link from 'next/link'
import Image from 'next/image'
import { Suspense, useId } from 'react'
import { Laboratory, Media } from '@/payload-types'
import { ExperimentMetadata } from './_components/experiment-metadata'
import { v4 } from 'uuid'

export default async function HomePage() {
  const experiments = await getExperiments()
  if (!experiments.length) {
    return <p>No experiments found</p>
  }

  return (
    <div className="bg-background h-svh w-svw overflow-y-auto overflow-x-hidden">
      <Suspense fallback={<div>Loading...</div>}>
        <div className="grid grid-cols-3 gap-4 m-4">
          {experiments.map(({ id, name, photo, description, laboratory, experimentItems }) => (
            <Link
              key={v4()}
              href={`/experiments/${id}`}
              aria-label={`Read article`}
              className="block"
            >
              <article className="rounded-md border border-gray-700 overflow-hidden h-full flex flex-col">
                {/* cover image */}
                <Image
                  src={(photo as Media).url ?? ''}
                  alt={`Cover image`}
                  width={256}
                  height={256}
                  className="h-50 object-cover object-center w-full"
                />

                {/* content */}
                <div className="p-3 flex-1 flex flex-col gap-5">
                  <header>
                    {/* title */}
                    <h2 className="font-bold text-lg">{name}</h2>
                    {/* summary */}
                    <p className="mt-2">{description.content as string}</p>
                  </header>

                  <ExperimentMetadata
                    data={{ laboratory: laboratory as Laboratory }}
                    className="mt-auto"
                  />
                </div>
              </article>
            </Link>
          ))}
        </div>
      </Suspense>
    </div>
  )
}
