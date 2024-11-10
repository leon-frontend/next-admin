import type { FC } from 'react'
import type { LayoutProps } from './type'

// ------------------------ ProductDetailLayout 组件 -------------------------
const ProductDetailLayout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className="bg-slate-500 mt-5 mb-5">
      <h1 className="text-3xl font-bold">ProductDetail Layout</h1>
      <div>{children}</div>
    </div>
  )
}

export default ProductDetailLayout
