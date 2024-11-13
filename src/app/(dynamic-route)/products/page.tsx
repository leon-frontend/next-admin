import Link from 'next/link'
import type { FC } from 'react'

const Products: FC = () => {
  const productId = 100

  return (
    <>
      <Link href="/" className="px-4 border-2 bg-pink-500">
        Back To HOME! (Click Me!)
      </Link>
      <div>Products Page!</div>
      <div>
        <Link href="products/1">Product 1 (Click ME!)</Link>
      </div>
      <div>
        <Link href="products/2">Product 2 (Click ME!)</Link>
      </div>
      <div>
        <Link href="products/3" replace>
          Product 3 (Click ME!)
        </Link>
      </div>
      <div>
        <Link href={`products/${productId}`}>
          Product {productId} (Click ME!)
        </Link>
      </div>
    </>
  )
}

export default Products
