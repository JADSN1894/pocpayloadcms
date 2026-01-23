import { getExperiments } from '@/collections/Experiments/fetchers'
import { Suspense } from 'react'
import { Laboratory, Media } from '@/payload-types'
import { v4 } from 'uuid'
import { ExperimentCard } from './_components/experiment-card'
import { convertLexicalToPlaintext } from '@payloadcms/richtext-lexical/plaintext'

export default async function HomePage() {
  const experiments = await getExperiments()
  if (!experiments.length) {
    return <p>No experiments found</p>
  }

  return (
    <div className="bg-background h-svh w-svw overflow-y-auto overflow-x-hidden">
      <Suspense fallback={<div>Loading...</div>}>
        <div className="grid gap-4 m-4 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
          {experiments.map(({ id, name, photo, description, laboratory }) => {
            const descriptionString = convertLexicalToPlaintext({ data: description })
            const castPhotoMedia = photo as Media
            const castLaboratory = laboratory as Laboratory
            return (
              <ExperimentCard
                key={v4()}
                data={{
                  id,
                  name,
                  description: descriptionString,
                  photo: castPhotoMedia,
                  laboratory: castLaboratory,
                }}
              ></ExperimentCard>
            )
          })}
        </div>
      </Suspense>
    </div>
  )
}
