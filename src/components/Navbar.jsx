import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FaBolt, FaBars, FaTimes, FaShoppingCart, FaRobot } from 'react-icons/fa'
import { useCart } from '../context/CartContext'

const links = [
  { to: '/', label: 'Inicio' },
  { to: '/tienda', label: 'Tienda' },
  { to: '/emulador', label: 'Emulador' },
  { to: '/marca', label: 'Marca' },
  { to: '/contacto', label: 'Contacto' }
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()
  const { count, open: openCart } = useCart()

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  return (
    <motion.nav
      className={`nav ${scrolled ? 'scrolled' : ''}`}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="container nav-row">
        <Link to="/" className="logo">
          <span className="logo-badge">
            <FaBolt />
          </span>
          Mobilador<span className="text-grad"> PRO</span>
        </Link>

        <button
          className="nav-toggle"
          onClick={() => setOpen((o) => !o)}
          aria-label="Menu"
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>

        <ul className={`nav-links ${open ? 'open' : ''}`}>
          {links.map((l) => (
            <li key={l.to}>
              <NavLink
                to={l.to}
                end={l.to === '/'}
                className={({ isActive }) => (isActive ? 'active' : '')}
              >
                {l.label === 'Emulador' && <FaRobot style={{ marginRight: 6 }} />}
                {l.label}
              </NavLink>
            </li>
          ))}
          <li className="nav-cart-wrap">
            <button className="nav-cta nav-cart" onClick={openCart} aria-label="Abrir carrito">
              <FaShoppingCart />
              <span className="cart-badge">{count}</span>
            </button>
          </li>
        </ul>
      </div>
    </motion.nav>
  )
}