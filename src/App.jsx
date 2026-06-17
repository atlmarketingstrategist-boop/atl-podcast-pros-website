import { lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { BookingModalProvider } from './components/BookingModal'
import { locationPages } from './data/locationPages'
import ClientPage from './pages/ClientPage'
import ThankYou from './pages/ThankYou'

const Home = lazy(() => import('./pages/Home'))
const HowItWorks = lazy(() => import('./pages/HowItWorks'))
const Services = lazy(() => import('./pages/Services'))
const OurWork = lazy(() => import('./pages/OurWork'))
const About = lazy(() => import('./pages/About'))
const Book = lazy(() => import('./pages/Book'))
const Blog = lazy(() => import('./pages/Blog'))
const BlogPost = lazy(() => import('./pages/BlogPost'))
const LocationPage = lazy(() => import('./pages/LocationPage'))

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

const STANDALONE_ROUTES = ['/thank-you']

function ConditionalLayout({ children }) {
  const { pathname } = useLocation()
  const isStandalone = STANDALONE_ROUTES.includes(pathname)
  return isStandalone ? <>{children}</> : (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <BookingModalProvider>
        <ScrollToTop />
        <ConditionalLayout>
          <Suspense fallback={<div style={{ background: '#1A1A1A', height: '100vh' }} />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/how-it-works" element={<HowItWorks />} />
              <Route path="/services" element={<Services />} />
              <Route path="/our-work" element={<OurWork />} />
              <Route path="/about" element={<About />} />
              <Route path="/book" element={<Book />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:slug" element={<BlogPost />} />
              <Route path="/locations/:slug" element={<LocationPage locations={locationPages} />} />
              <Route path="/client/:slug" element={<ClientPage />} />
              <Route path="/thank-you" element={<ThankYou />} />
            </Routes>
          </Suspense>
        </ConditionalLayout>
      </BookingModalProvider>
    </BrowserRouter>
  )
}
