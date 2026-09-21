import { useEffect, useRef, useState, useCallback } from 'react'
import { FaRobot, FaPlay, FaRedo, FaKeyboard, FaMouse, FaWifi, FaBatteryFull, FaSignal } from 'react-icons/fa'

const GAME_W = 620
const PLAYER_LEFT = 64
const PLAYER_W = 34
const PLAYER_H = 40
const GROUND = 34

let spawnId = 0

export default function EmulatorWidget() {
  const [status, setStatus] = useState('menu')
  const [score, setScore] = useState(0)
  const [best, setBest] = useState(0)
  const [obstacles, setObstacles] = useState([])
  const [jumping, setJumping] = useState(false)

  const worldRef = useRef({ obstacles: [], spawnCd: 0, running: false })
  const jumpingRef = useRef(false)
  const statusRef = useRef('menu')

  const endGame = useCallback((current) => {
    if (!worldRef.current.running) return
    worldRef.current.running = false
    statusRef.current = 'over'
    setStatus('over')
    setBest((b) => Math.max(b, current))
  }, [])

  const jump = useCallback(() => {
    if (statusRef.current !== 'playing' || jumpingRef.current) return
    jumpingRef.current = true
    setJumping(true)
    setTimeout(() => {
      jumpingRef.current = false
      setJumping(false)
    }, 520)
  }, [])

  const start = useCallback(() => {
    worldRef.current = { obstacles: [], spawnCd: 25, running: true }
    statusRef.current = 'playing'
    setStatus('playing')
    setScore(0)
    setObstacles([])
  }, [])

  useEffect(() => {
    const onKey = (e) => {
      if (e.code === 'Space' || e.code === 'ArrowUp') {
        e.preventDefault()
        if (statusRef.current === 'menu' || statusRef.current === 'over') start()
        else if (statusRef.current === 'playing') jump()
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [start, jump])

  useEffect(() => {
    if (statusRef.current !== 'playing') return
    const iv = setInterval(() => {
      const w = worldRef.current
      if (!w.running) {
        clearInterval(iv)
        return
      }
      w.obstacles = w.obstacles
        .map((o) => ({ ...o, x: o.x - 6 }))
        .filter((o) => o.x > -70)
      w.spawnCd -= 1
      if (w.spawnCd <= 0) {
        w.obstacles.push({ id: ++spawnId, x: GAME_W + 10, h: 16 + Math.random() * 18 })
        w.spawnCd = 42 + Math.random() * 24
      }
      for (const o of w.obstacles) {
        if (o.x < PLAYER_LEFT + PLAYER_W && o.x + 16 > PLAYER_LEFT - 4 && !jumpingRef.current) {
          endGame(score)
          clearInterval(iv)
          return
        }
      }
      setObstacles(w.obstacles.slice())
      setScore((s) => s + 1)
    }, 34)
    return () => clearInterval(iv)
  }, [status, score, endGame])

  const info = (
    <div className="emu-toolbar">
      <span><FaMouse /> Controles por mouse</span>
      <span><FaKeyboard /> Tecla ESPACIO para saltar</span>
      <span>60 FPS</span>
    </div>
  )

  return (
    <div className="emu-window">
      <div className="emu-titlebar">
        <span className="emu-dot red" />
        <span className="emu-dot yellow" />
        <span className="emu-dot green" />
        <span className="emu-title">
          <FaRobot /> Mobilador PRO Emulador <em>· Android en tu PC</em>
        </span>
        <span className="emu-os">BlueStack-style · v1.0</span>
      </div>
      <div className="emu-android-bar">
        <span><FaSignal /> <FaWifi /> <FaBatteryFull /></span>
        <span>Mobilador OS · {new Date().toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit' })}</span>
      </div>
      {info}
      <div
        className="game"
        style={{ height: 300 }}
        onClick={() => {
          if (statusRef.current === 'menu' || statusRef.current === 'over') start()
          else jump()
        }}
      >
        <div className="game-ground" />
        <div className={`game-player ${jumping ? 'jump' : ''}`}>
          <FaRobot />
        </div>
        {obstacles.map((o) => (
          <div
            key={o.id}
            className="game-ob"
            style={{ left: o.x, height: o.h, bottom: GROUND }}
          />
        ))}
        <div className="game-score">Score: {score}</div>
        {status !== 'playing' && (
          <div className="game-overlay">
            <div className="game-overlay-card">
              <h3>{status === 'over' ? '¡Game Over!' : 'PRO RUNNER'}</h3>
              <p>
                {status === 'over'
                  ? `Mejor marca: ${best}`
                  : 'Emulá un juego en PC: saltá con ESPACIO o click.'}
              </p>
              <button className="btn btn-primary" onClick={status === 'over' ? start : () => { start(); jump() }}>
                {status === 'over' ? <><FaRedo /> Reintentar</> : <><FaPlay /> Jugar</>}
              </button>
            </div>
          </div>
        )}
        {status === 'playing' && (
          <div className="game-hint">ESPACIO para saltar · click también</div>
        )}
      </div>
      <div className="emu-msg">
        Así funciona un emulador de Android en PC: el juego corre como app móvil y vos jugás
        con EL mouse y teclado. Con periféricos Mobilador PRO, cada salto es a 0 latencia.
      </div>
    </div>
  )
}