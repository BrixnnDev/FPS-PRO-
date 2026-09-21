import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaCartPlus, FaCheck, FaStar } from 'react-icons/fa'
import { useCart } from '../context/CartContext'

export default function ProductCard({ product, index = 0 }) {
  const Icon = product.icon
  const { add } = useCart()
  const [added, setAdded] = useState(false)

  const handleAdd = () => {
    add(product)
    setAdded(true)
    setTimeout(() => setAdded(false), 1400)
  }

  return (
    <motion.article
      className="product-card"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: (index % 4) * 0.1 }}
    >
      <div className="product-thumb">
        {product.oldPrice && (
          <span className="badge-off">
            -{Math.round((1 - product.price / product.oldPrice) * 100)}%
          </span>
        )}
        <Icon style={{ filter: 'drop-shadow(0 12px 26px rgba(0,229,255,0.35))' }} />
      </div>
      <div className="product-body">
        <span className="product-cat">{product.cat}</span>
        <h3>{product.name}</h3>
        <div className="product-rating">
          <FaStar /> {product.rating} <span>({Math.round(40 + product.id * 37)} ventas)</span>
        </div>
        <p className="note" style={{ marginTop: 4, fontSize: '0.92rem' }}>
          {product.desc}
        </p>
        <div className="product-price">
          <span>USD</span> {product.price}
          {product.oldPrice && <s className="old-price">${product.oldPrice}</s>}
        </div>
        <button
          className={`btn ${added ? 'btn-added' : 'btn-primary'}`}
          style={{ marginTop: 16, justifyContent: 'center', width: '100%' }}
          onClick={handleAdd}
        >
          {added ? <><FaCheck /> Agregado</> : <><FaCartPlus /> Agregar</>}
        </button>
      </div>
    </motion.article>
  )
}