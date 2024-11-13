'use client'
import React from 'react'
import { notFound } from 'next/navigation'
import type { FC } from 'react'

// 定义 ReviewDetailPage 组件的 Props 的 TS 类型
export type PageProps = {
  params: Promise<{
    productId: string
    reviewId: string
  }>
}

// getRandomInt 函数会返回 0 ~ count 之间的随机整数
const getRandomInt = (count: number) => Math.floor(Math.random() * count)

// -------------------------- ReviewDetailPage 组件 ----------------------------
const ReviewDetailPage: FC<PageProps> = ({ params }) => {
  // 在客户端组件中，使用 React.use() hook 解包 Promise 对象
  const { productId, reviewId } = React.use(params)

  // 获取 0 ~ 2 之间的随机整数
  const random = getRandomInt(2)

  // 当随机数为 1 时，抛出错误
  if (random === 1) throw new Error('Error loading ReviewDetailPage')

  // 当 reviewId 的值大于 1000 时，展示 not-found UI
  if (parseInt(reviewId) > 1000) notFound()

  return (
    <div>
      Review {reviewId} for product {productId}
    </div>
  )
}

export default ReviewDetailPage
