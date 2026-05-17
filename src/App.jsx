import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { BookingModalProvider } from './components/BookingModal'
import Home from './pages/Home'
import HowItWorks from './pages/HowItWorks'
import Services from './pages/Services'
import OurWork from './pages/OurWork'
import About from './pages/About'
import Book from './pages/Book'
import Blog from './pages/Blog'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

export default function App() {
  return (
    <BrowserRouter>
      <BookingModalProvider>
        <ScrollToTop />
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/how-it-works" element={<HowItWorks />} />
            <Route path="/services" element={<Services />} />
            <Route path="/our-work" element={<OurWork />} />
            <Route path="/about" element={<About />} />
            <Route path="/book" element={<Book />} />
            <Route path="/blog" element={<Blog />} />
          </Routes>
        </main>
        <Footer />
      </BookingModalProvider>
    </BrowserRouter>
  )
}
