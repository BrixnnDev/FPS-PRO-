import { Link } from 'react-router-dom'
import { FaBolt, FaInstagram, FaTwitter, FaYoutube, FaFacebook, FaDiscord } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <Link to="/" className="logo" style={{ color: '#fff' }}>
              <span className="logo-badge">
                <FaBolt />
              </span>
              Mobilador<span style={{ color: '#00e5ff' }}> PRO</span>
            </Link>
            <p style={{ marginTop: 16, maxWidth: 360 }}>
              Equipamiento gamer de alto rendimiento. Mouse, teclados, headsets y todo lo que
              tu setup necesita para pasar al siguiente nivel.
            </p>
            <div className="footer-social">
              <Link to="/contacto" aria-label="Instagram"><FaInstagram /></Link>
              <Link to="/contacto" aria-label="Twitter"><FaTwitter /></Link>
              <Link to="/contacto" aria-label="YouTube"><FaYoutube /></Link>
              <Link to="/contacto" aria-label="Facebook"><FaFacebook /></Link>
              <Link to="/contacto" aria-label="Discord"><FaDiscord /></Link>
            </div>
          </div>
          <div>
            <h4>Navegación</h4>
            <ul>
              <li><Link to="/">Inicio</Link></li>
              <li><Link to="/tienda">Tienda</Link></li>
              <li><Link to="/marca">Sobre la marca</Link></li>
              <li><Link to="/contacto">Contacto</Link></li>
            </ul>
          </div>
          <div>
            <h4>Productos</h4>
            <ul>
              <li><Link to="/tienda?cat=Mouse">Mouse</Link></li>
              <li><Link to="/tienda?cat=Teclado">Teclados</Link></li>
              <li><Link to="/tienda?cat=Audífonos">Audífonos</Link></li>
              <li><Link to="/tienda?cat=Gamepad">Gamepads</Link></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          © {new Date().getFullYear()} Mobilador PRO. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  )
}