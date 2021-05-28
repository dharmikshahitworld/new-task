import { FC } from 'react'
import { Image, Nav, Navbar } from 'react-bootstrap'
import { MdMail, MdNotifications, MdSettings } from 'react-icons/md'
import { Link } from 'react-router-dom'

import profile from 'assets/dummy-profile.jpg'

import './Header.scss'

export const Header: FC = () => {
  return (
    <div className='header r-shadow'>
      <Navbar bg='white' expand='lg'>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Nav className='d-flex justify-content-end w-100 px-2 m-2'>
          <Link
            to='#'
            className='text-secondary d-flex align-self-center fs-4 me-4 text-decoration-none position-relative'
          >
            <div className='custom-badge'>9</div>
            <MdNotifications />
          </Link>
          <Link
            to='#'
            className='text-secondary d-flex align-self-center fs-4 me-4 text-decoration-none position-relative'
          >
            <div className='custom-badge'>3</div>
            <MdMail />
          </Link>
          <Link to='#' className='text-secondary d-flex align-self-center me-4'>
            <Image
              height='30px'
              width='30px'
              src={profile}
              alt='profile'
              roundedCircle
            />
          </Link>
          <Link to='#' className='text-secondary d-flex align-self-center fs-4'>
            <MdSettings />
          </Link>
        </Nav>
      </Navbar>
    </div>
  )
}
