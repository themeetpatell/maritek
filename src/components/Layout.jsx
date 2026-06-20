import { Outlet } from 'react-router-dom'
import TopBar from './TopBar'
import Header from './Header'
import Footer from './Footer'
import WhatsAppFab from './WhatsAppFab'
import { LocalBusinessJsonLd } from './PageMeta'

export default function Layout() {
  return (
    <>
      <LocalBusinessJsonLd />
      <TopBar />
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
      <WhatsAppFab />
    </>
  )
}
