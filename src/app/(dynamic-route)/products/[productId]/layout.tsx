import type { FC } from 'react'
import type { LayoutProps } from './type'

// getRandomInt 函数会返回 0 ~ count 之间的随机整数
const getRandomInt = (count: number) => Math.floor(Math.random() * count)

// ------------------------ ProductDetailLayout 组件 -------------------------
const ProductDetailLayout: FC<LayoutProps> = ({ children }) => {
  const random = getRandomInt(2)

  // 当随机数为 1 时，抛出错误
  if (random === 1) throw new Error('加载 ProductDetail Layout 时出错！！！')

  return (
    <div className="mt-5 mb-5">
      <h1 className="text-3xl font-bold">ProductDetail Layout</h1>
      <div>{children}</div>
    </div>
  )
}

export default ProductDetailLayout
