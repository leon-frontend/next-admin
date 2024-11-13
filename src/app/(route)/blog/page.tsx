import type { FC } from 'react'
import type { Metadata } from 'next'

// 定义 BlogPage 页面的元数据
export const metadata: Metadata = {
  // title: 'Blog', // 测试 template 属性
  title: {
    absolute: 'Blog - Absolute',
  },
}

// -------------------- BlogPage 组件 --------------------
const BlogPage: FC = () => {
  return <div>My Blog</div>
}

export default BlogPage
