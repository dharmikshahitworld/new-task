import { RCol } from 'components/common/RCol'
import { RRow } from 'components/common/RRow'
import { DashboardCard } from 'components/dashboardCard/DashboardCard'
import { OrderStatusCard } from 'components/orderStatusCard/OrderStatusCard'
import { RecentActivitiesCard } from 'components/recentActivitiesCard/RecentActivitiesCard'
import { StatusCards } from 'components/statusCards/StatusCards'
import { TrafficCard } from 'components/trafficCard/TrafficCard'
import { RLayout } from 'layout/RLayout'

import './DashboardPage.scss'

export const DashboardPage = () => {
  return (
    <RLayout>
      <div className='p-4'>
        <RRow>
          <RCol md={15}>
            <DashboardCard />
          </RCol>
          <RCol>
            <TrafficCard />
          </RCol>
        </RRow>
        <StatusCards />
        <RRow>
          <RCol>
            <RecentActivitiesCard />
          </RCol>
          <RCol md={15}>
            <OrderStatusCard />
          </RCol>
        </RRow>
      </div>
    </RLayout>
  )
}
