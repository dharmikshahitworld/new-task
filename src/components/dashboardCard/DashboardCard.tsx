import { FaChartLine, FaCrown, FaHeart, FaMagic } from 'react-icons/fa'

import { MainChart } from 'components/chart/MainChart'
import { RButton } from 'components/common/button/RButton'
import { RCard } from 'components/common/RCard'
import { RCardBody } from 'components/common/RCardBody'
import { RCol } from 'components/common/RCol'
import { RRow } from 'components/common/RRow'
import { RTab } from 'components/common/RTab'
import { RTabs } from 'components/common/RTabs'

import './DashboardCard.scss'

export const DashboardCard = () => {
  return (
    <RCard>
      <RCardBody>
        <RRow>
          <RCol md={8}>
            <div className='h6 pb-1'>Dashboard</div>
            <div className='fs-6 text-secondary'>Overview of Latest Month</div>
            <div className='pt-4'>
              <div className='h1'>$3468.96</div>
              <div className='fs-6 text-secondary'>Current Month Earnings</div>
            </div>
            <div className='pt-4'>
              <div className='h1'>82</div>
              <div className='fs-6 text-secondary'>Current Month Sales</div>
            </div>
            <div className='pt-4'>
              <RButton className='px-4 py-3' variant='orange'>
                Last Month Summary
              </RButton>
            </div>
          </RCol>
          <RCol>
            <div className='main-chart mb-3'>
              <RTabs
                className='border-0'
                defaultActiveKey='1'
                id='main-chart-tabs'
              >
                <RTab eventKey='1' title='DAILY'>
                  <MainChart />
                </RTab>
                <RTab eventKey='2' title='WEEKLY'>
                  {/* <Weekly Chart /> */}
                </RTab>
                <RTab eventKey='3' title='MONTHLY'>
                  {/* <Monthly Chart /> */}
                </RTab>
                <RTab eventKey='4' title='YEARLY'>
                  {/* <Yearly Chart /> */}
                </RTab>
              </RTabs>
            </div>
          </RCol>
        </RRow>
        <RRow>
          <RCol className='border-top border-end border-light'>
            <div className='d-flex pt-3 pb-1 align-items-center'>
              <FaCrown className='rounded-circle fs-1 me-3 p-2 bg-orange text-white' />
              <div>
                <div className='text-secondary fs-6'>Wallet Ballance</div>
                <div className='h5'>$4,567.53</div>
              </div>
            </div>
          </RCol>
          <RCol className='border-top border-end border-light'>
            <div className='d-flex pt-3 pb-1 align-items-center'>
              <FaHeart className='rounded-circle fs-1 me-3 p-2 bg-info text-white' />
              <div>
                <div className='text-secondary fs-6'>Referral Earning</div>
                <div className='h5'>$1,667.53</div>
              </div>
            </div>
          </RCol>
          <RCol className='border-top border-end border-light'>
            <div className='d-flex pt-3 pb-1 align-items-center'>
              <FaMagic className='rounded-circle fs-1 me-3 p-2 bg-success text-white' />
              <div>
                <div className='text-secondary fs-6'>Estimate Sales</div>
                <div className='h5'>$2,135.53</div>
              </div>
            </div>
          </RCol>
          <RCol className='border-top border-light'>
            <div className='d-flex pt-3 pb-1 align-items-center'>
              <FaChartLine className='rounded-circle fs-1 me-3 p-2 bg-hotpink text-white' />
              <div>
                <div className='text-secondary fs-6'>Earning</div>
                <div className='h5'>$54,563.53</div>
              </div>
            </div>
          </RCol>
        </RRow>
      </RCardBody>
    </RCard>
  )
}
