import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
  FaPaperPlane,
  FaCheckCircle
} from 'react-icons/fa'

export default function Contact() {
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', topic: 'Consulta general', message: '' })

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
  }

  const info = [
    { icon: FaMapMarkerAlt, t: 'Ubicación', d: 'Zona Central, Ciudad Gaming 1000' },
    { icon: FaPhoneAlt, t: 'Teléfono', d: '+1 (555) 123-4567' },
    { icon: FaEnvelope, t: 'Email', d: 'hola@mobiladorpro.com' },
    { icon: FaClock, t: 'Horarios', d: 'Lun a Sáb · 9:00 - 21:00' }
  ]

  return (
    <>
      <header className="page-head">
        <div className="container">
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            Contacto <span className="grad">PRO</span>
          </motion.h1>
          <p>¿Tenés dudas, querés soporte o una compra a medida? Escribinos.</p>
        </div>
      </header>

      <section className="section" style={{ paddingTop: 20 }}>
        <div className="container contact-grid">
          <motion.form
            className="contact-form"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {sent ? (
              <motion.div
                style={{ textAlign: 'center', padding: '40px 0' }}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
              >
                <FaCheckCircle style={{ fontSize: 56, color: '#00c853', marginBottom: 16 }} />
                <h3>¡Mensaje enviado!</h3>
                <p className="note">Te respondemos en menos de 24h. GG.</p>
              </motion.div>
            ) : (
              <>
                <div>
                  <label>Nombre</label>
                  <input
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    placeholder="Tu nombre gamer"
                  />
                </div>
                <div>
                  <label>Email</label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    placeholder="tu@email.com"
                  />
                </div>
                <div>
                  <label>Motivo</label>
                  <select name="topic" value={form.topic} onChange={handleChange}>
                    <option>Consulta general</option>
                    <option>Soporte técnico</option>
                    <option>Compra mayorista</option>
                    <option>Sponsor / colaboración</option>
                  </select>
                </div>
                <div>
                  <label>Mensaje</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    placeholder="Contanos en qué podemos ayudarte..."
                  />
                </div>
                <button type="submit" className="btn btn-primary" style={{ justifyContent: 'center' }}>
                  <FaPaperPlane /> Enviar mensaje
                </button>
              </>
            )}
          </motion.form>

          <div className="contact-info-list">
            {info.map((i, idx) => {
              const Icon = i.icon
              return (
                <motion.div
                  key={i.t}
                  className="contact-info-card"
                  initial={{ opacity: 0, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                >
                  <span className="fi"><Icon /></span>
                  <div>
                    <h4>{i.t}</h4>
                    <p>{i.d}</p>
                  </div>
                </motion.div>
              )
            })}
            <motion.p
              className="note"
              style={{ padding: '0 8px' }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              También podés pasarte por nuestra tienda física. La comunidad siempre tiene
              la puerta abierta.
            </motion.p>
          </div>
        </div>
      </section>
    </>
  )
}