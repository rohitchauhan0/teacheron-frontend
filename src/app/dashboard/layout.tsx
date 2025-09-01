import React from 'react'
import Sidebar from './_components/sidebar'
import Topbar from './_components/topbar'
import Footer from '../_common_comp/Footer'

const DashboardLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (

      <div className=''>
        <div className=' '>
          {children}
        </div>
        <Footer/>
      </div>
  
  )
}

export default DashboardLayout