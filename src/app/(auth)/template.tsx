'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import type { FC } from 'react'
import type { LayoutProps } from './type'

// navLinks 用于存储导航项数据
const navLinks = [
  { name: 'Register', href: '/register' },
  { name: 'Login', href: '/login' },
  { name: 'Forgot Password', href: '/forgot-pwd' },
]

// -------------------------- AuthLayout 组件 -----------------------------
const AuthLayout: FC<LayoutProps> = ({ children }) => {
  // 使用 usePathname hook 判断当前 Link 是否处于激活状态，然后添加"激活"样式
  const pathname = usePathname() // pathname 的是当前的 URL 信息

  // inputVal 状态用于保存 input 输入框的值
  const [inputVal, setInputVal] = useState<string>('')

  return (
    <div>
      <div>
        <input
          type="text"
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
          className="border-2"
        />
      </div>
      {/* 遍历 navLinks 数组，动态渲染导航项 */}
      {navLinks.map((link) => {
        // 判断当前的 URL 信息和当前的 Link 信息是否相等
        const isActive: boolean = pathname.startsWith(link.href)

        return (
          <Link
            href={link.href}
            key={link.name}
            // 给激活的 Link 添加样式：红色文本，不显示 border
            className={`mr-4 border-b-2 border-blue-500" ${
              isActive ? 'text-red-700 border-b-0' : ''
            }`}
          >
            {link.name} (Click ME!)
          </Link>
        )
      })}
      {children}
    </div>
  )
}

export default AuthLayout
