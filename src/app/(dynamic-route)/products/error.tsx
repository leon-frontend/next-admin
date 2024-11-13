'use client'
import type { FC } from 'react'

// 定义 ReviewDetailError 组件的 Props 的 TS 类型
export type ErrorProps = {
  error: Error
}
// ------------------------- ReviewDetailError 组件 ------------------------
const ProductDetailError: FC<ErrorProps> = ({ error }) => {
  // error.message 的值是在 page.tsx 组件中抛出错误的值
  return (
    <>
      <div className="font-bold text-red-400">{error.message}</div>
    </>
  )
}

export default ProductDetailError
