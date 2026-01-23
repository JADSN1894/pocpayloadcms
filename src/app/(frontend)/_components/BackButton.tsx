'use client' // This directive marks the component as a Client Component

import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'

export default function BackButton() {
  const router = useRouter()

  const handleBack = () => {
    router.back()
  }

  return <Button onClick={handleBack}>Voltar</Button>
}
