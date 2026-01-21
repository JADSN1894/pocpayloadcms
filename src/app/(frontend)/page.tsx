import { getLaboratories } from '@/collections/Laboratories/fetchers'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { Suspense } from 'react'

export default async function HomePage() {
  return (
    <div className="h-full w-full flex justify-center items-center">
      <Link href={`/experiments`}>
        <Button className="w-full">Experimentos</Button>
      </Link>
    </div>
  )
}
