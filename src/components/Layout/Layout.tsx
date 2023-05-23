import {Outlet} from 'react-router-dom'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import './Layout.scss'

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

export default Layout
