import type { FC } from 'react'

// 定义 ProductDetail 组件的 Props 的 TS 类型
type ProductDetailProps = {
  params: Promise<{
    productId: string // 定义 params 中的变量的类型，productId 对应动态路由文件名
  }>
}

// ---------------------- ProductDetail 组件 ------------------------------
// params 是一个对象，用于接收动态路由中的参数
const ProductDetail: FC<ProductDetailProps> = async ({ params }) => {
  // 需要异步获取 params props 中的值
  const productId = (await params).productId

  return (
    <div className="text-2xl font-bold">Details for Product {productId}</div>
  )
}

export default ProductDetail
