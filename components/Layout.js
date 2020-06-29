import Nav from './Nav'
import Head from 'next/head'

const Layout = ({ title, children }) => (
  <div>
    <Head>
      <title>{title}</title>
    </Head>
    <Nav />
    <section className='content'>
      <h1 className='title-page'>{title}</h1>
      <hr />
      {children}
    </section>
  </div>
)

export default Layout
