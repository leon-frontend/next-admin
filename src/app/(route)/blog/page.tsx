import type { FC } from 'react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  // title: 'Blog', // 测试 template 属性
  title: {
    absolute: 'Blog - Absolute',
  },
}

const Blog: FC = () => {
  return <div>My Blog!</div>
}

export default Blog
