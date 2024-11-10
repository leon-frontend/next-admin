import type { Metadata } from 'next'

// 定义 ProductDetailLayout 组件的 Props 的 TS 类型
export type LayoutProps = {
  children: React.ReactNode
}

// 定义 ProductDetail 页面组件的 Props 的 TS 类型
export type PageProps = {
  params: Promise<{
    productId: string // 定义 params 中的变量的类型，productId 对应动态路由文件名
  }>
}

// generateMetadata() 函数的 TS 类型
export type GMFn = ({ params }: PageProps) => Promise<Metadata>
