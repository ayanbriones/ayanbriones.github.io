import Header from './Header'
import Nav from './Nav'
import Intro from './Intro'
import Footer from './Footer'
import Head from 'next/head'
import Copyright from './Copyright'

const Layout = ({ children }) => {
  return (
    <div id='wrapper' className='fade-in'>
      <Head>
        <title>Portfolio - Bryanth Briones</title>
      </Head>
      <Intro />
      <Header />
      <Nav />
      <div id='main'>{children}</div>
      <Footer />
      <Copyright />
    </div>
  )
}

export default Layout
