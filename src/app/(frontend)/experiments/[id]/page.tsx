import { getExperimentById } from '@/collections/Experiments/fetchers'
import { getLaboratories } from '@/collections/Laboratories/fetchers'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import Image from 'next/image'
import { Suspense } from 'react'
import { ExperimentItem, Media } from '@/payload-types'
import { TableExperimentItens } from './_components/table'
import { RichText } from '@/lib/payload/components/rich-text'

export default async function ExperimentPage({ params }: { params: Promise<{ id: number }> }) {
  const { id } = await params

  const experiments = await getExperimentById(id)
  if (!experiments) {
    return <p>No experiments found</p>
  }

  const experiment = experiments[0]

  let headersValuesArg = ['qtde', 'description']

  const experimentItems = experiment.experimentItems as ExperimentItem[]

  return (
    <div className="flex justify-center w-svw h-svh overflow-x-hidden overflow-y-auto mt-4">
      <div className="prose lg:prose-lg dark:prose-invert">
        <h1>{experiment.name}</h1>

        <Image
          src={(experiment.photo as Media).url ?? ''}
          alt={`Cover image`}
          width={256}
          height={256}
          className="h-50 object-cover object-center w-full"
        />

        <RichText lexicalData={experiment.description} />

        <TableExperimentItens
          headers={headersValuesArg}
          rows={experimentItems}
        ></TableExperimentItens>
      </div>
    </div>
  )
}
