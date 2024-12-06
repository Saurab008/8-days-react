import React, { Children } from 'react'

import Header from '../Components/Navagation/header'
import Footer from '../Components/Footer/footer'
function Layout({children}) {
  return (
    <>
  <Header>

  </Header>
  <div>

    {children}
  </div>
  <Footer>

  </Footer>
    </>
  )
} 

export default Layout