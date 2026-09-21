import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaTimes, FaTrashAlt, FaShoppingCart, FaCheckCircle, FaPlus, FaMinus } from 'react-icons/fa'
import { useCart } from '../context/CartContext'

export default function CartDrawer() {
  const { items, isOpen, close, remove, setQty, subtotal, shipping, total, clear, count } = useCart()
  const [done, setDone] = useState(false)

  const checkout = () => {
    setDone(true)
    clear()
  }

  const closeAll = () => {
    setDone(false)
    close()
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            className="drawer-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeAll}
          />
          <motion.aside
            className="drawer"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.32, ease: [0.32, 0.72, 0, 1] }}
          >
            <div className="drawer-head">
              <h3>
                <FaShoppingCart /> Tu carrito
                {count > 0 && <span className="drawer-count">{count}</span>}
              </h3>
              <button className="drawer-close" onClick={closeAll} aria-label="Cerrar carrito">
                <FaTimes />
              </button>
            </div>

            {done ? (
              <motion.div
                className="drawer-empty"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
              >
                <FaCheckCircle style={{ fontSize: 52, color: '#00c853' }} />
                <h4>¡Compra realizada!</h4>
                <p>Gracias por confiar en Mobilador PRO. Te contactamos por email.</p>
                <button className="btn btn-primary" onClick={closeAll}>
                  Seguir comprando
                </button>
              </motion.div>
            ) : items.length === 0 ? (
              <div className="drawer-empty">
                <FaShoppingCart style={{ fontSize: 52, color: 'var(--accent-dark)' }} />
                <h4>Tu carrito está vacío</h4>
                <p>Sumá periféricos PRO y arrasá en la próxima partida.</p>
                <button className="btn btn-primary" onClick={closeAll}>
                  Ver tienda
                </button>
              </div>
            ) : (
              <>
                <div className="drawer-items">
                  <AnimatePresence initial={false}>
                    {items.map((item) => {
                      const Icon = item.icon
                      return (
                        <motion.div
                          key={item.id}
                          className="cart-item"
                          layout
                          initial={{ opacity: 0, y: 16 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, x: 60 }}
                        >
                          <span className="cart-item-ico"><Icon /></span>
                          <div className="cart-item-info">
                            <h5>{item.name}</h5>
                            <span className="cart-item-cat">{item.cat}</span>
                            <div className="qty-ctl">
                              <button onClick={() => setQty(item.id, item.qty - 1)} aria-label="Menos">
                                <FaMinus />
                              </button>
                              <span>{item.qty}</span>
                              <button onClick={() => setQty(item.id, item.qty + 1)} aria-label="Más">
                                <FaPlus />
                              </button>
                            </div>
                          </div>
                          <div className="cart-item-right">
                            <span className="cart-item-price">${item.price * item.qty}</span>
                            <button className="cart-item-remove" onClick={() => remove(item.id)} aria-label="Quitar">
                              <FaTrashAlt />
                            </button>
                          </div>
                        </motion.div>
                      )
                    })}
                  </AnimatePresence>
                </div>

                <div className="drawer-foot">
                  <div className="drawer-row">
                    <span>Subtotal</span>
                    <span>${subtotal}</span>
                  </div>
                  <div className="drawer-row">
                    <span>Envío</span>
                    <span>{shipping === 0 ? 'Gratis' : `$${shipping}`}</span>
                  </div>
                  <div className="drawer-row total">
                    <span>Total</span>
                    <span>${total + shipping}</span>
                  </div>
                  <button className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }} onClick={checkout}>
                    Finalizar compra
                  </button>
                  <p className="drawer-ship">Envío gratis a partir de $100.</p>
                </div>
              </>
            )}
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  )
}