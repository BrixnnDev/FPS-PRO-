import { motion } from 'framer-motion'
import { FaRocket, FaUsers, FaAward, FaHandshake } from 'react-icons/fa'
import { infoHighlights } from '../data/data'

const timeline = [
  { year: '2019', title: 'Nace la idea', desc: 'Un grupo de gamers cansados del hardware caro decide crear su propia línea.' },
  { year: '2021', title: 'Primer mouse PRO', desc: 'El MP-X1 conquista los torneos locales por su precisión y precio.' },
  { year: '2023', title: 'Ecosistema completo', desc: 'Teclados, headsets y gamepads: nace el setup Mobilador PRO.' },
  { year: '2026', title: '+10K de fans', desc: 'Más de 10.000 jugadores confían en nuestra tecnología cada día.' }
]

export default function Brand() {
  return (
    <>
      <header className="page-head">
        <div className="container">
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            Conocé <span className="grad">Mobilador PRO</span>
          </motion.h1>
          <p>Más que periféricos: una actitud frente al juego.</p>
        </div>
      </header>

      <section className="section" style={{ paddingTop: 20 }}>
        <div className="container">
          <motion.div
            className="feature-card"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ padding: 40 }}
          >
            <h2 className="section-title">
              Tecnología con <span className="grad">mentalidad robótica</span>
            </h2>
            <p className="note" style={{ fontSize: '1.1rem', maxWidth: 720 }}>
              En Mobilador PRO creemos que cada milisegundo cuenta. Por eso diseñamos
              periféricos donde la precisión, la velocidad y la estética futurista se
              convierten en una sola cosa. Somos gamers, por y para gamers.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 20 }}>
        <div className="container">
          <motion.h2 className="section-title" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            El <span className="grad">ecosistema</span> completo
          </motion.h2>
          <div className="grid-cards" style={{ marginTop: 44 }}>
            {infoHighlights.map((h, i) => {
              const Icon = h.icon
              return (
                <motion.div
                  key={h.title}
                  className="feature-card"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
                >
                  <span className="fi"><Icon /></span>
                  <h3>{h.title}</h3>
                  <p>{h.desc}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 10 }}>
        <div className="container">
          <motion.h2 className="section-title" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            Nuestra <span className="grad">evolución</span>
          </motion.h2>
          <div className="band-grid" style={{ marginTop: 44 }}>
            {timeline.map((t, i) => (
              <motion.div
                key={t.year}
                className="band-item"
                style={{ background: '#fff', borderColor: 'var(--line)', color: 'var(--ink)' }}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
              >
                <span className="fi" style={{ color: 'var(--accent-dark)' }}><FaRocket /></span>
                <h3 style={{ color: 'var(--accent-dark)' }}>{t.year} — {t.title}</h3>
                <p style={{ color: 'var(--muted)' }}>{t.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 20 }}>
        <div className="container">
          <div className="grid-cards">
            {[
              { icon: FaUsers, t: 'Comunidad', d: 'Eventos, sorteos y espacio con streamers de la región.' },
              { icon: FaAward, t: 'Calidad', d: 'Cada unidad pasa 3 controles antes de salir a la venta.' },
              { icon: FaHandshake, t: 'Confianza', d: 'Garantía de 2 años y soporte que responde rápido.' }
            ].map((v, i) => {
              const Icon = v.icon
              return (
                <motion.div
                  key={v.t}
                  className="feature-card"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <span className="fi"><Icon /></span>
                  <h3>{v.t}</h3>
                  <p>{v.d}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}