import type { FC } from 'react'

// 定义 ComplexDashboardLayout 组件的 Props 的 TS 类型
type LayoutProps = {
  children: React.ReactNode // children 相当于一个默认的隐式插槽
  notifications: React.ReactNode // 并行路由使用的具名插槽
  revenue: React.ReactNode // 并行路由使用的具名插槽
  users: React.ReactNode // 并行路由使用的具名插槽
  login: React.ReactNode // 并行路由使用的具名插槽
}

// --------------------------- Layout 组件 ---------------------------
const ComplexDashboardLayout: FC<LayoutProps> = ({
  children,
  notifications,
  revenue,
  users,
  login,
}) => {
  // isLogin 用于控制条件渲染
  const isLogin = true

  return isLogin ? (
    <>
      {/* 展示 @children/page.tsx 组件 */}
      <div>{children}</div>
      <div className="flex">
        <div className="flex flex-col">
          {/* 展示 @users/page.tsx 组件 */}
          <div>{users}</div>
          {/* 展示 @revenue/page.tsx 组件 */}
          <div>{revenue}</div>
        </div>
        {/* 展示 @notifications/page.tsx 组件 */}
        <div className="flex flex-1">{notifications}</div>
      </div>
    </>
  ) : (
    login
  )
}

export default ComplexDashboardLayout
