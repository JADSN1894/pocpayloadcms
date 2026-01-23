import { getExperimentById } from '@/collections/Experiments/fetchers'
import Image from 'next/image'
import { ExperimentItem, Media } from '@/payload-types'
import { TableExperimentItens } from './_components/table'
import { convertLexicalToPlaintext } from '@payloadcms/richtext-lexical/plaintext'

export default async function ExperimentPage({ params }: { params: Promise<{ id: number }> }) {
  const { id } = await params

  const experiments = await getExperimentById(id)
  if (!experiments) {
    return <p>No experiments found</p>
  }

  const { name, photo, description, experimentItems } = experiments[0]

  const headersValuesArg = ['QUANTIDADE', 'DESCRIÇÃO']
  const castExperimentItems = experimentItems as ExperimentItem[]
  const castPhotoMedia = photo as Media

  const descriptionString = convertLexicalToPlaintext({ data: description })
  const imgHeight = castPhotoMedia.height ?? 512
  const imgWidth = castPhotoMedia.width ?? 512

  return (
    <div className="flex flex-col w-dvw h-dvh overflow-x-hidden gap-y-2 mt-4">
      <div>
        <h1 className="font-bold text-center md:text-2xl lg:text-4xl">{name}</h1>
      </div>

      <div className="flex justify-center content-center">
        <Image
          src={castPhotoMedia.url ?? ''}
          alt={`${name}`}
          height={imgHeight}
          width={imgWidth}
          className="object-center mr-2 ml-2"
        />
      </div>

      <div>
        <h2 className="text-wrap text-justify lg:w-[98%] ml-2 mr-2">{descriptionString}</h2>
      </div>

      <div>
        <TableExperimentItens
          headers={headersValuesArg}
          rows={castExperimentItems}
        ></TableExperimentItens>
      </div>
    </div>
  )
}
