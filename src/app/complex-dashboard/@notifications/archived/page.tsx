import Card from '@/components/Card'
import Link from 'next/link'
import type { FC } from 'react'

// -------------------------- Page 组件 ------------------------
const ArchivedNotificationsPage: FC = () => {
  return (
    <Card>
      <div className="flex flex-col justify-center items-center">
        <div>Archived Notifications Page</div>
        <Link href="/complex-dashboard" className="p-2 mt-2 border-2">
          To Default Page (Click Me!)
        </Link>
      </div>
    </Card>
  )
}

export default ArchivedNotificationsPage
