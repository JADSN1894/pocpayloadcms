import { Laboratory } from '@/payload-types'

export function ExperimentMetadata({
  data,
  className,
}: {
  data: {
    laboratory: Laboratory
  }
  className?: string
}) {
  const { laboratory } = data

  return (
    <div className={`mt-4 flex items-center justify-between ${className}`}>
      {/* author */}
      <div className="flex items-center gap-2">
        {/* author name, role */}
        <div className="flex flex-col leading-none text-sm gap-1.5">
          <p className="font-bold">{laboratory.laboratory}</p>
        </div>
      </div>
    </div>
  )
}
