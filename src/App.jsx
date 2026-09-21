import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import { motion } from 'framer-motion'
import { CartProvider } from './context/CartContext'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import CartDrawer from './components/CartDrawer'
import ErrorBoundary from './components/ErrorBoundary'

const Home = lazy(() => import('./pages/Home'))
const Store = lazy(() => import('./pages/Store'))
const Brand = lazy(() => import('./pages/Brand'))
const Contact = lazy(() => import('./pages/Contact'))
const Emulator = lazy(() => import('./pages/Emulator'))

function Page({ children }) {
  return (
    <motion.main
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      {children}
    </motion.main>
  )
}

function Loading() {
  return (
    <div style={{ minHeight: '60vh', display: 'grid', placeItems: 'center' }}>
      <span
        style={{
          width: 46,
          height: 46,
          borderRadius: '50%',
          border: '4px solid var(--line)',
          borderTopColor: 'var(--accent)',
          animation: 'spin 0.8s linear infinite'
        }}
      />
    </div>
  )
}

export default function App() {
  return (
    <ErrorBoundary>
      <CartProvider>
        <ScrollToTop />
        <Navbar />
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<Page><Home /></Page>} />
            <Route path="/tienda" element={<Page><Store /></Page>} />
            <Route path="/emulador" element={<Page><Emulator /></Page>} />
            <Route path="/marca" element={<Page><Brand /></Page>} />
            <Route path="/contacto" element={<Page><Contact /></Page>} />
            <Route path="*" element={<Page><Home /></Page>} />
          </Routes>
        </Suspense>
        <Footer />
        <CartDrawer />
      </CartProvider>
    </ErrorBoundary>
  )
}