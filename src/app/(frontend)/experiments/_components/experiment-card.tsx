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

  const castPhotoMedia = photo as Media

  return (
    <Link key={v4()} href={`/experiments/${id}`} aria-label={`Read article`} className="block">
      <article className="rounded-md border border-gray-700 overflow-hidden w-full h-full flex flex-col sm:mr-4">
        {/* cover image */}
        <Image
          src={(photo as Media).url ?? ''}
          alt={`${name}`}
          height={castPhotoMedia.height ?? 512}
          width={castPhotoMedia.width ?? 512}
          className={`sm:h-20 md:h-50 lg:h-80 object-contain object-center w-full mt-2`}
        />

        {/* content */}
        <div className="p-3 flex-1 flex flex-col gap-4">
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
