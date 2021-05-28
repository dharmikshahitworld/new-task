import { RCard } from 'components/common/RCard'
import { RCardBody } from 'components/common/RCardBody'
import { RCol } from 'components/common/RCol'
import { RRow } from 'components/common/RRow'
import React, { FC } from 'react'
import { FaBolt, FaListUl } from 'react-icons/fa'
import { dummyActivities } from 'utils/data'

import './RecentActivitiesCard.scss'

export const RecentActivitiesCard: FC = () => {
  return (
    <div className='recent-activities-card'>
      <RCard className='pb-2'>
        <RCardBody>
          <div className='h6 pb-3'>Recent Activities</div>
          {dummyActivities.map((activities) => (
            <div key={activities.id} className='status'>
              <RRow>
                <RCol xs={6}>
                  <div className='text-secondary d-flex align-items-center h-100 text-capitalize fs-6'>
                    {activities.recent}
                  </div>
                </RCol>
                <RCol>
                  <div className='d-flex position-relative'>
                    <div className='position-relative'>
                      {activities.icon}
                      <div className='icon-line' />
                    </div>
                    <div>
                      <div className='h5 pb-1'>{activities.title}</div>
                      <span className='h6'>{activities.name}</span>
                      <span className='fs-6 text-secondary ms-1'>
                        {activities.status}
                      </span>
                    </div>
                  </div>
                </RCol>
              </RRow>
            </div>
          ))}
        </RCardBody>
      </RCard>
    </div>
  )
}
