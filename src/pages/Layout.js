import React from 'react'
import Aside from '../component/Aside'
import Footer from '../component/Footer'
import Header from '../component/Header'
import Pages from '../routes'

function Layout() {
  return (
    <>
    <Aside />
    <Header />
    <main>
        <Pages />
    </main>
    <Footer />
    </>
  )
}

export default Layout