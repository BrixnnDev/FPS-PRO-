import { lazy, Suspense } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  FaMouse,
  FaKeyboard,
  FaHeadset,
  FaGamepad,
  FaChair,
  FaPlug,
  FaArrowRight,
  FaRobot,
  FaTv,
  FaQuoteLeft,
  FaGraduationCap,
  FaCheckCircle,
  FaMicrochip,
  FaBullseye,
  FaComment
} from 'react-icons/fa'
import ProductCard from '../components/ProductCard'
import { features, products, stats, testimonials } from '../data/data'

const Hero3D = lazy(() => import('../components/Hero3D'))

const categoryChips = [
  { cat: 'Mouse', icon: FaMouse },
  { cat: 'Teclado', icon: FaKeyboard },
  { cat: 'Audífonos', icon: FaHeadset },
  { cat: 'Gamepad', icon: FaGamepad },
  { cat: 'Monitores', icon: FaTv },
  { cat: 'Sillas', icon: FaChair },
  { cat: 'Accesorios', icon: FaPlug }
]

const guide = [
  {
    icon: FaBullseye,
    t: '1 · Definí tu juego',
    d: 'FPS pide mouse ligero y teclado con respuesta rápida; MOBA y MMO piden macros y botoneras extra.'
  },
  {
    icon: FaMicrochip,
    t: '2 · Elegí el sensor',
    d: 'Desde 8K DPI para casual hasta 30K DPI con tracking de 650 IPS para competitivo.'
  },
  {
    icon: FaComment,
    t: '3 · El audio manda',
    d: 'Un headset 7.1 con mic claro te da ventaja: escuchás pasos y te comunica con tu escuadra.'
  },
  {
    icon: FaGraduationCap,
    t: '4 · Armá tu setup',
    d: 'Sumá silla ergonómica, monitor de alto refresh y accesorios. Todo sincronizado con RGB.'
  }
]

export default function Home() {
  const featured = products.filter((p) => p.featured)

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.6, delay: i * 0.12 } })
  }

  return (
    <>
      <section className="hero">
        <div className="container hero-grid">
          <div>
            <motion.span className="tagline" custom={0} variants={fadeUp} initial="hidden" animate="show">
              <FaRobot /> Equipamiento Gamer
            </motion.span>

            <motion.h1 custom={1} variants={fadeUp} initial="hidden" animate="show">
              Llevá tu juego<span className="grad"> al siguiente nivel</span>
            </motion.h1>

            <motion.p className="lead" custom={2} variants={fadeUp} initial="hidden" animate="show">
              Mouse, teclados, headsets y periféricos de alto rendimiento diseñados
              para competitivos reales. Rapidito, preciso y sin límites.
            </motion.p>

            <motion.div className="hero-cta" custom={3} variants={fadeUp} initial="hidden" animate="show">
              <Link to="/tienda" className="btn btn-primary">
                Ver tienda <FaArrowRight />
              </Link>
              <Link to="/emulador" className="btn btn-ghost">
                Probar el emulador
              </Link>
            </motion.div>

            <motion.div className="hero-stats" custom={4} variants={fadeUp} initial="hidden" animate="show">
              {stats.map((s) => (
                <div key={s.lbl}>
                  <div className="num">{s.num}</div>
                  <div className="lbl">{s.lbl}</div>
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div
            className="hero-3d"
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            <Suspense fallback={<div style={{ width: '100%', height: '100%' }} />}>
              <Hero3D />
            </Suspense>
          </motion.div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 40 }}>
        <div className="container">
          <motion.h2 className="section-title" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            Explorá por <span className="grad">categoría</span>
          </motion.h2>
          <p className="section-sub">Todo lo que tu setup necesita, en un solo lugar.</p>
          <div className="chip-row">
            {categoryChips.map((c) => {
              const Icon = c.icon
              return (
                <motion.div
                  key={c.cat}
                  whileHover={{ y: -4, scale: 1.04 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <Link to={`/tienda?cat=${c.cat}`} className="chip">
                    <Icon /> {c.cat}
                  </Link>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <motion.h2 className="section-title" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            Más <span className="grad">vendidos</span>
          </motion.h2>
          <p className="section-sub">Los favoritos de la comunidad gaming, directo al carrito.</p>
          <div className="grid-cards" style={{ marginTop: 44 }}>
            {featured.map((p, i) => (
              <ProductCard key={p.id} product={p} index={i} />
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: 50 }}>
            <Link to="/tienda" className="btn btn-primary">
              Ver todo el catálogo <FaArrowRight />
            </Link>
          </div>
        </div>
      </section>

      <section className="band" style={{ padding: '90px 0' }}>
        <div className="container">
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Tecnología que <span style={{ color: '#00e5ff' }}>domina</span>
          </motion.h2>
          <div className="band-grid" style={{ marginTop: 44 }}>
            {features.map((f, i) => {
              const Icon = f.icon
              return (
                <motion.div
                  key={f.title}
                  className="band-item"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <span className="fi"><Icon /></span>
                  <h3>{f.title}</h3>
                  <p>{f.desc}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <motion.h2 className="section-title" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            Guía: armá tu <span className="grad">setup ideal</span>
          </motion.h2>
          <div className="grid-cards" style={{ marginTop: 44 }}>
            {guide.map((g, i) => {
              const Icon = g.icon
              return (
                <motion.div
                  key={g.t}
                  className="feature-card"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <span className="fi"><Icon /></span>
                  <h3>{g.t}</h3>
                  <p>{g.d}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 10 }}>
        <div className="container">
          <motion.h2 className="section-title" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            Ellos ya la <span className="grad">viven</span>
          </motion.h2>
          <div className="grid-cards" style={{ marginTop: 44 }}>
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                className="feature-card"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <FaQuoteLeft style={{ fontSize: 28, color: 'var(--accent)', marginBottom: 14 }} />
                <p style={{ color: 'var(--ink)', fontWeight: 500 }}>"{t.quote}"</p>
                <div style={{ marginTop: 18 }}>
                  <strong style={{ fontFamily: 'var(--font-head)', textTransform: 'uppercase', fontSize: '0.85rem' }}>
                    {t.name}
                  </strong>
                  <div className="product-cat" style={{ marginTop: 4 }}>{t.role}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="band" style={{ padding: '90px 0' }}>
        <div className="container">
          <motion.div
            className="brand-section"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="brand-text">
              <span className="tagline" style={{ color: '#00e5ff' }}>
                <FaRobot /> Somos Mobilador
              </span>
              <h2 className="section-title" style={{ marginTop: 16 }}>
                Una marca hecha <span style={{ color: '#00e5ff' }}>por gamers</span>
              </h2>
              <p style={{ color: 'rgba(255,255,255,0.75)', fontWeight: 500, maxWidth: 560, marginTop: 16 }}>
                Diseñamos cada periférico pensando en la partida: precisión, velocidad y
                estética robótica. Probamos todo con la comunidad antes de lanzarlo al mercado.
              </p>
              <div className="brand-checks">
                {['Diseñado y testeado por gamers', 'Garantía de 2 años', 'Envío a todo el país'].map((c) => (
                  <span key={c}><FaCheckCircle style={{ color: '#00e5ff' }} /> {c}</span>
                ))}
              </div>
              <Link to="/marca" className="btn btn-primary" style={{ marginTop: 30 }}>
                Conocé la marca <FaArrowRight />
              </Link>
            </div>
            <div className="brand-3d">
              <div className="brand-orb">
                <FaRobot />
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}