import { FC } from 'react'
import { TrafficChart } from 'components/chart/trafficChart/TrafficChart'
import { RCard } from 'components/common/RCard'
import { RCardBody } from 'components/common/RCardBody'
import { RCol } from 'components/common/RCol'
import { RRow } from 'components/common/RRow'

export const TrafficCard: FC = () => {
  return (
    <RCard className='h-100'>
      <RCardBody>
        <div className='h6 pb-1'>Traffic</div>
        <div className='d-flex justify-content-between flex-column h-100'>
          <TrafficChart />
          <RRow>
            <RCol className='border-top border-end border-light'>
              <div className='d-flex flex-column align-items-center justify-content-center py-3'>
                <div className='h3'>34%</div>
                <div className='text-secondary fs-6'>Facebook</div>
              </div>
            </RCol>
            <RCol className='border-top border-end border-light'>
              <div className='d-flex flex-column align-items-center justify-content-center py-3'>
                <div className='h3'>55%</div>
                <div className='text-secondary fs-6'>Youtube</div>
              </div>
            </RCol>
            <RCol className='border-top border-light'>
              <div className='d-flex flex-column align-items-center justify-content-center py-3'>
                <div className='h3'>11%</div>
                <div className='text-secondary fs-6'>Direct Search</div>
              </div>
            </RCol>
          </RRow>
        </div>
      </RCardBody>
    </RCard>
  )
}
