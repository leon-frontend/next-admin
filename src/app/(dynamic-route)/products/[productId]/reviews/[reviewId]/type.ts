// 定义 ReviewDetail 组件的 Props 的 TS 类型
export type ReviewDetailProps = {
  params: Promise<{
    productId: string
    reviewId: string
  }>
}
