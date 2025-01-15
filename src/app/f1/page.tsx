import Link from 'next/link'
import type { FC } from 'react'

const F1Page: FC = () => {
  return (
    <>
      <div className="mb-4 text-3xl font-bold">F1Page</div>
      <div>
        <Link
          href="/f1/f2"
          className="px-2 py-1 border-2 border-black rounded-xl"
        >
          To F2 (Click Me!)
        </Link>
      </div>
    </>
  )
}

export default F1Page
