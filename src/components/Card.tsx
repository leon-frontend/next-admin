import type { FC } from 'react'

// 定义 Card 组件接收的 Props 的 TS 类型
type CardProps = {
  children: React.ReactNode
}

// --------------------- Card 组件 ----------------------
const Card: FC<CardProps> = ({ children }) => {
  const cardStyle = {
    padding: '100px',
    margin: '10px',
    boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)',
    border: '1px solid #ddd',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }

  return <div style={cardStyle}>{children}</div>
}

export default Card
