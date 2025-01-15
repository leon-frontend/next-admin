import Link from 'next/link'
import type { FC } from 'react'

const F4Page: FC = () => {
  return (
    <>
      <div className="mb-4 text-3xl font-bold">I am F4 Page</div>
      <div>
        <Link
          href="/f1/f3"
          className="px-2 py-1 border-2 border-black rounded-xl"
        >
          To F3 (Click Me!)
        </Link>
        <Link
          href="/about"
          className="block w-[220px] px-2 py-1 mt-5 border-2 border-black rounded-xl"
        >
          To About Page (Click Me!)
        </Link>
      </div>
    </>
  )
}

export default F4Page
