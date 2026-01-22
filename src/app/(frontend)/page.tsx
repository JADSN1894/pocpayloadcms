import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default async function HomePage() {
  return (
    <div className="h-full w-full flex justify-center items-center">
      <Link href={`/experiments`}>
        <Button className="w-full">Experimentos</Button>
      </Link>
    </div>
  )
}
