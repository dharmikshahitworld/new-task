import { FC } from 'react'
import { RCard } from 'components/common/RCard'
import { RCardBody } from 'components/common/RCardBody'
import { RButton } from 'components/common/button/RButton'
import {
  FaExclamationCircle,
  FaFile,
  FaPlusCircle,
  FaSearch,
  FaTrash,
} from 'react-icons/fa'
import { Form, Table } from 'react-bootstrap'
import { dummyTableData } from 'utils/data'
import { status } from 'utils/enums'

export const OrderStatusCard: FC = () => {
  return (
    <RCard className='h-100'>
      <RCardBody>
        <div className='h6 pb-1'>Order Status</div>
        <div className='fs-6 pb-2 text-secondary'>Overview of Latest Month</div>
        <div className='d-flex justify-content-between pt-3 pb-4'>
          <div className='d-flex'>
            <RButton variant='orange' className='me-2'>
              <FaPlusCircle className='me-1' />
              Add
            </RButton>
            <RButton variant='light' className='me-2 px-3'>
              <FaExclamationCircle />
            </RButton>
            <RButton variant='light' className='me-2 px-3'>
              <FaTrash />
            </RButton>
            <RButton variant='light' className='me-2 px-3'>
              <FaFile />
            </RButton>
          </div>
          <div className='d-flex justify-content-end'>
            <Form.Control
              placeholder='Search'
              className='w-75 me-2 px-3 border-0 bg-light fs-6'
            />
            <RButton variant='light' className='me-2 px-3'>
              <FaSearch />
            </RButton>
          </div>
        </div>
        <Table borderless hover responsive='xl' className='fs-6 mt-1'>
          <thead className='align-middle bg-light fw-normal text-uppercase'>
            <tr>
              <th className='fw-bold'>invoice</th>
              <th className='fw-bold'>customers</th>
              <th className='fw-bold'>from</th>
              <th className='fw-bold'>price</th>
              <th className='fw-bold'>status</th>
            </tr>
          </thead>
          <tbody className='align-middle'>
            {dummyTableData.map((data) => (
              <tr key={data.id} className='border-bottom border-light'>
                <td>{data.invoice}</td>
                <td>{data.customers}</td>
                <td>{data.from}</td>
                <td>{data.price}</td>
                <td>
                  <RButton
                    className='w-50'
                    variant={
                      data.status === status.inProcess
                        ? 'danger'
                        : data.status === status.onHold
                        ? 'info'
                        : 'success'
                    }
                  >
                    {data.status}
                  </RButton>
                  {data.status === status.inProcess}
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
        <div className='text-secondary fs-6'>Showing 1 to 20 of 20 entries</div>
      </RCardBody>
    </RCard>
  )
}
