import type { FC } from 'react'
import type { AuthLayoutProps } from './type'

const AuthLayout: FC<AuthLayoutProps> = ({ children }) => {
  return (
    <div>
      <h1>AuthLayout</h1>
      {children}
    </div>
  )
}

export default AuthLayout
