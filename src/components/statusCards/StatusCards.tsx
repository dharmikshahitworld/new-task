import { RAlert } from 'components/common/RAlert'
import { RCol } from 'components/common/RCol'
import { RRow } from 'components/common/RRow'
import { FaLongArrowAltUp } from 'react-icons/fa'
import { dummyStatusData } from 'utils/data'

import './StatusCards.scss'

export const StatusCards = () => {
  return (
    <div className='status-cards py-4'>
      <RRow>
        {dummyStatusData.map((card) => (
          <RCol key={card.id}>
            <RAlert variant={card.variant}>
              <RRow>
                <div className='h-6'>{card.title}</div>
                <div className='d-flex h2 py-2'>
                  <FaLongArrowAltUp />
                  <div>$432</div>
                </div>
                <div className='fs-6 text-secondary'>Jan 01 - Jan 10</div>
              </RRow>
            </RAlert>
          </RCol>
        ))}
      </RRow>
    </div>
  )
}
