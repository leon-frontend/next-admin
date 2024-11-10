import type { FC } from 'react'
import type { Metadata } from 'next'

// 定义静态的 metadata 对象
export const metadata: Metadata = {
  title: 'About Page',
}

// --------------------- About 路由组件 --------------------
const About: FC = () => {
  return <div>About Me!</div>
}

export default About
