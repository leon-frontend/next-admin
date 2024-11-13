'use client'
import { useRouter } from 'next/navigation'
import type { FC } from 'react'

// ------------------------ OrderProductPage 组件 -----------------------
const OrderProductPage: FC = () => {
  // 使用 useRouter hook 实现编程式导航
  const router = useRouter()
  return (
    <>
      <div>OrderProductPage</div>
      <button
        onClick={() => router.push('/products')}
        className="border-b-2 border-purple-500"
      >
        Place Order (Clike Me!)
      </button>
    </>
  )
}

export default OrderProductPage
