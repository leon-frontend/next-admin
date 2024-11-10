import type { FC } from 'react'
import type { GMFn, PageProps } from './type'

// 使用 generateMetadata() 函数根据动态路由参数获取元数据
export const generateMetadata: GMFn = async ({ params }) => {
  // 需要异步获取 params props 中的值
  const productId = (await params).productId

  // 返回根据动态值生成的 metadata 对象
  return {
    title: `Product ${productId}`,
  }
}

// ---------------------- ProductDetail 页面组件 ------------------------------
// params 是一个对象，用于接收动态路由中的参数
const ProductDetail: FC<PageProps> = async ({ params }) => {
  // 需要异步获取 params props 中的值
  const productId = (await params).productId

  return (
    <div className="text-2xl font-400">Details for Product {productId}</div>
  )
}

export default ProductDetail
