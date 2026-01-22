import { getExperiments } from '@/collections/Experiments/fetchers'
import Link from 'next/link'
import Image from 'next/image'
import { Laboratory, Media } from '@/payload-types'
import { ExperimentMetadata } from './experiment-metadata'
import { v4 } from 'uuid'

export function ExperimentCard({
  data,
  className,
}: {
  data: {
    id: number
    name: string
    description: string
    photo: Media
    laboratory: Laboratory
  }
  className?: string
}) {
  const { id, name, description, photo, laboratory } = data
  return (
    <Link key={v4()} href={`/experiments/${id}`} aria-label={`Read article`} className="block">
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
            <p className="mt-2">{description}</p>
          </header>

          <ExperimentMetadata data={{ laboratory }} className="mt-auto" />
        </div>
      </article>
    </Link>
  )
}
