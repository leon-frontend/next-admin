import type { FC } from 'react'
import type { ReviewDetailProps } from './type'
import { notFound } from 'next/navigation'

// -------------------------- ReviewDetail 组件 ----------------------------
const ReviewDetail: FC<ReviewDetailProps> = async ({ params }) => {
  // 需要异步获取 params props 中的值
  const productId = (await params).productId
  const reviewId = (await params).reviewId

  // 当 reviewId 的值大于 1000 时，展示 not-found UI
  if (parseInt(reviewId) > 1000) notFound()

  return (
    <div>
      Review {reviewId} for product {productId}
    </div>
  )
}

export default ReviewDetail
