import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
  FaRobot,
  FaStepForward,
  FaGamepad,
  FaKeyboard,
  FaMouse,
  FaWifi,
  FaCog,
  FaDownload,
  FaArrowRight,
  FaCheckCircle
} from 'react-icons/fa'
import EmulatorWidget from '../components/EmulatorWidget'
import { emulators } from '../data/data'

const steps = [
  { icon: FaDownload, t: '1 · Descargá el emulador', d: 'Elegí uno de los emuladores de PC de abajo e instalalo desde su sitio oficial.' },
  { icon: FaStepForward, t: '2 · Iniciá sesión', d: 'Entrá con tu cuenta de Google para tener acceso a la Play Store y tus juegos.' },
  { icon: FaCog, t: '3 · Configurá el key mapping', d: 'Asigná W A S D, mouse y teclas directas a los controles táctiles del juego.' },
  { icon: FaGamepad, t: '4 · Conectá tus periféricos PRO', d: 'Conectá mouse, teclado y audífonos Mobilador PRO y pasá a modo competitivo.' }
]

const mapping = [
  { icon: FaMouse, t: 'Mouse PRO', d: 'Remap del "joystick" de cámara al mouse para apuntar como en PC.' },
  { icon: FaKeyboard, t: 'Teclado PRO', d: 'Teclas directas para disparar, agacharte, saltar y usar habilidades.' },
  { icon: FaGamepad, t: 'Gamepad PRO', d: 'Todo tu setup se vuelve compatible al conectarlo al emulador.' },
  { icon: FaWifi, t: 'Sin lag', d: 'Con latencia 0ms tu reflejo manda, no la señal.' }
]

export default function Emulator() {
  return (
    <>
      <header className="page-head">
        <div className="container">
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            Emulador <span className="grad">PRO</span>
          </motion.h1>
          <p>Jugá juegos de Android en tu PC con mouse, teclado y gamepad.</p>
        </div>
      </header>

      {/* Qué es */}
      <section className="section" style={{ paddingTop: 10 }}>
        <div className="container">
          <motion.div
            className="feature-card"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ padding: 40 }}
          >
            <h2 className="section-title">
              ¿Qué es un <span className="grad">emulador de PC</span>?
            </h2>
            <p className="note" style={{ fontSize: '1.1rem', maxWidth: 780 }}>
              Un emulador como <strong>BlueStacks</strong> transforma tu PC en un móvil Android:
              tus juegos favoritos de la tienda corren en pantalla grande y se controlan con
              teclado y mouse. Probá una demo interactiva:
            </p>
            <EmulatorWidget />
          </motion.div>
        </div>
      </section>

      {/* Mejores emuladores */}
      <section className="section" style={{ paddingTop: 10 }}>
        <div className="container">
          <motion.h2 className="section-title" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            Los mejores emuladores de <span className="grad">Android para PC</span>
          </motion.h2>
          <div className="grid-cards" style={{ marginTop: 44 }}>
            {emulators.map((e, i) => (
              <motion.div
                key={e.name}
                className="feature-card"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div className="emu-tier-row">
                  <span className="fi"><FaRobot /></span>
                  <span className="emu-tier">{e.tier}</span>
                </div>
                <h3>{e.name}</h3>
                <span className="product-cat">{e.tag}</span>
                <p className="note" style={{ marginTop: 8, fontSize: '0.95rem' }}>{e.desc}</p>
                <ul className="emu-feats">
                  {e.features.map((f) => (
                    <li key={f}><FaCheckCircle /> {f}</li>
                  ))}
                </ul>
                <a
                  href={e.url}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="btn btn-ghost"
                  style={{ marginTop: 14, justifyContent: 'center' }}
                >
                  Sitio oficial <FaArrowRight />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Setup paso a paso */}
      <section className="section" style={{ paddingTop: 10 }}>
        <div className="container">
          <motion.h2 className="section-title" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            Setup PRO en <span className="grad">4 pasos</span>
          </motion.h2>
          <div className="grid-cards" style={{ marginTop: 44 }}>
            {steps.map((s, i) => {
              const Icon = s.icon
              return (
                <motion.div
                  key={s.t}
                  className="feature-card"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <span className="fi"><Icon /></span>
                  <h3>{s.t}</h3>
                  <p>{s.d}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Key mapping */}
      <section className="band" style={{ padding: '90px 0' }}>
        <div className="container">
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Key mapping con <span style={{ color: '#00e5ff' }}>periféricos PRO</span>
          </motion.h2>
          <div className="band-grid" style={{ marginTop: 44 }}>
            {mapping.map((m, i) => {
              const Icon = m.icon
              return (
                <motion.div
                  key={m.t}
                  className="band-item"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <span className="fi"><Icon /></span>
                  <h3>{m.t}</h3>
                  <p>{m.d}</p>
                </motion.div>
              )
            })}
          </div>
          <div style={{ marginTop: 44, textAlign: 'center' }}>
            <Link to="/tienda" className="btn btn-primary">
              Comprar setup para emular <FaArrowRight />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}