import Card from '@/components/Card'
import Link from 'next/link'
import type { FC } from 'react'

// -------------------------- Page 组件 ------------------------
const NotificationsPage: FC = () => {
  return (
    <Card>
      <div className="flex flex-col justify-center items-center">
        <div>Notifications Page</div>
        <Link href="/complex-dashboard/archived" className="p-2 mt-2 border-2">
          To Archived Page (Click Me!)
        </Link>
      </div>
    </Card>
  )
}

export default NotificationsPage
