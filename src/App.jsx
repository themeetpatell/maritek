import TopBar from './components/TopBar'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Categories from './components/Categories'
import FeaturedProducts from './components/FeaturedProducts'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <TopBar />
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Categories />
        <FeaturedProducts />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
