import Link from 'next/link'
import type { FC } from 'react'

const Home: FC = () => {
  return (
    <>
      <div>Welcome Home!</div>
      <Link
        href="/blog"
        className="px-4 mr-4 border-2 border-black bg-pink-500"
      >
        To Blog Page (Click ME!)
      </Link>
      <Link href="/products" className="px-4 border-2 border-black bg-red-500">
        To Products Page (Click ME!)
      </Link>
    </>
  )
}

export default Home
