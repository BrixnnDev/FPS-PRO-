import { useEffect, useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import ProductCard from '../components/ProductCard'
import { products, categories } from '../data/data'

const normalize = (s) => s.normalize('NFD').replace(/[^\w\s]/g, '')
const matchCat = (a, b) => normalize(a).toLowerCase() === normalize(b).toLowerCase()

export default function Store() {
  const [params, setParams] = useSearchParams()
  const active = params.get('cat') || 'Todos'

  const setCat = (cat) => {
    if (cat === 'Todos') setParams({})
    else setParams({ cat })
  }

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [])

  const filtered = useMemo(
    () =>
      active === 'Todos'
        ? products
        : products.filter((p) => matchCat(p.cat, active)),
    [active]
  )

  return (
    <>
      <header className="page-head">
        <div className="container">
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            Tienda <span className="grad">Mobilador PRO</span>
          </motion.h1>
          <p>Todo el equipamiento que tu setup necesita.</p>
        </div>
      </header>

      <section className="section" style={{ paddingTop: 30 }}>
        <div className="container">
          <div className="filters">
            {categories.map((c) => (
              <button
                key={c}
                className={`filter-btn ${matchCat(active, c) ? 'active' : ''}`}
                onClick={() => setCat(c)}
              >
                {c}
              </button>
            ))}
          </div>

          <AnimatePresence mode="popLayout">
            {filtered.length === 0 ? (
              <motion.div
                key="empty"
                className="empty-state"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                No hay productos en esta categoría todavía.
              </motion.div>
            ) : (
              <motion.div key={active} className="grid-cards" layout>
                {filtered.map((p, i) => (
                  <ProductCard key={p.id} product={p} index={i} />
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>
    </>
  )
}