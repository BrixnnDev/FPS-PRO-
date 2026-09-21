import {
  FaMouse,
  FaKeyboard,
  FaHeadset,
  FaGamepad,
  FaDesktop,
  FaChair,
  FaMicrophone,
  FaVideo,
  FaBolt,
  FaTachometerAlt,
  FaShieldAlt,
  FaWifi,
  FaCog,
  FaLightbulb,
  FaPlug,
  FaPalette,
  FaVolumeUp,
  FaMobileAlt,
  FaTv,
  FaRobot,
  FaGooglePlay,
  FaGripVertical,
  FaLock,
  FaMicrophoneAlt
} from 'react-icons/fa'

export const categories = [
  'Todos',
  'Mouse',
  'Teclado',
  'Audífonos',
  'Gamepad',
  'Monitores',
  'Sillas',
  'Accesorios'
]

export const categoryIcons = {
  Mouse: FaMouse,
  Teclado: FaKeyboard,
  'Audífonos': FaHeadset,
  Gamepad: FaGamepad,
  Monitores: FaTv,
  Sillas: FaChair,
  Accesorios: FaPlug
}

export const products = [
  {
    id: 1,
    name: 'Mouse Gamer MP-X1',
    cat: 'Mouse',
    price: 45,
    oldPrice: 59,
    rating: 4.8,
    featured: true,
    desc: 'Sensor óptico 16K DPI, 8 botones programables y switches de 80M clics.',
    icon: FaMouse
  },
  {
    id: 2,
    name: 'Mouse Inalámbrico Viper',
    cat: 'Mouse',
    price: 62,
    oldPrice: 76,
    rating: 4.9,
    featured: true,
    desc: 'Ultra-ligero 58g, 2.4GHz + Bluetooth, hasta 160 horas de batería.',
    icon: FaMouse
  },
  {
    id: 3,
    name: 'Mouse MP-X2 Ultra',
    cat: 'Mouse',
    price: 79,
    rating: 4.7,
    desc: 'Sensor 30K DPI, parrilla RGB, peso ajustable con 4 configuraciones.',
    icon: FaMouse
  },
  {
    id: 4,
    name: 'Mouse Pro Wireless RGB',
    cat: 'Mouse',
    price: 95,
    rating: 5.0,
    desc: 'Wireless de 1ms, cargador inalámbrico y 8K de polling rate.',
    icon: FaMouse
  },
  {
    id: 5,
    name: 'Teclado Mechanic K90',
    cat: 'Teclado',
    price: 89,
    oldPrice: 110,
    rating: 4.8,
    featured: true,
    desc: 'Mecánico hot-swap con switches rojos, RGB y cuerpo de aluminio.',
    icon: FaKeyboard
  },
  {
    id: 6,
    name: 'Teclado Compact TKL',
    cat: 'Teclado',
    price: 54,
    rating: 4.6,
    featured: true,
    desc: 'Layout 80%, anti-fantasma en 100% de teclas y macro dedicado.',
    icon: FaKeyboard
  },
  {
    id: 7,
    name: 'Teclado Macro 60% Pro',
    cat: 'Teclado',
    price: 69,
    rating: 4.7,
    desc: 'Formato 60%, perfil bajo, doble inyección PBT y RGB por tecla.',
    icon: FaKeyboard
  },
  {
    id: 8,
    name: 'Teclado Full RGB Phantom',
    cat: 'Teclado',
    price: 109,
    rating: 4.9,
    desc: 'Switches ópticos magnéticos, actuación variable y reposamuñecas.',
    icon: FaKeyboard
  },
  {
    id: 9,
    name: 'Headset Sonic 7.1',
    cat: 'Audífonos',
    price: 74,
    oldPrice: 89,
    rating: 4.8,
    featured: true,
    desc: 'Sonido envolvente 7.1 real, mic retráctil y memoria de espuma.',
    icon: FaHeadset
  },
  {
    id: 10,
    name: 'Headset Pro-Mic RGB',
    cat: 'Audífonos',
    price: 39,
    rating: 4.5,
    desc: 'Drivers de 50mm, cancelación de ruido y luz RGB reactiva.',
    icon: FaHeadset
  },
  {
    id: 11,
    name: 'Headset Wireless Storm',
    cat: 'Audífonos',
    price: 99,
    rating: 4.9,
    desc: 'Inalámbrico 2.4GHz, 40h de uso y audio espacial de alta fidelidad.',
    icon: FaHeadset
  },
  {
    id: 12,
    name: 'Gamepad Elite Pro',
    cat: 'Gamepad',
    price: 68,
    oldPrice: 82,
    rating: 4.7,
    featured: true,
    desc: 'Palancas de efecto Hall, gatillos con tensión ajustable y backplane.',
    icon: FaGamepad
  },
  {
    id: 13,
    name: 'Gamepad Compact S',
    cat: 'Gamepad',
    price: 42,
    rating: 4.5,
    desc: 'Ligero, ergonómico y multiplataforma: PC, consolas y móvil.',
    icon: FaGamepad
  },
  {
    id: 14,
    name: 'Monitor Curvo 27" 165Hz',
    cat: 'Monitores',
    price: 289,
    rating: 4.9,
    featured: true,
    desc: 'Panel VA curvo 1500R, resolución QHD y sincronización adaptativa.',
    icon: FaDesktop
  },
  {
    id: 15,
    name: 'Monitor 24" 144Hz',
    cat: 'Monitores',
    price: 199,
    rating: 4.6,
    desc: 'Full HD IPS, 1ms de respuesta y tecnología anti-flicker.',
    icon: FaDesktop
  },
  {
    id: 16,
    name: 'Silla Vertex Racing',
    cat: 'Sillas',
    price: 249,
    rating: 4.7,
    featured: true,
    desc: 'Tapizado premium, respaldo reclinable 180° y cojines de soporte.',
    icon: FaChair
  },
  {
    id: 17,
    name: 'Silla Titan Plus',
    cat: 'Sillas',
    price: 319,
    rating: 4.9,
    desc: 'Soporte lumbar ajustable, reposabrazos 4D y base reforzada.',
    icon: FaChair
  },
  {
    id: 18,
    name: 'Base de Enfriamiento',
    cat: 'Accesorios',
    price: 29,
    rating: 4.4,
    desc: '6 ventiladores, altura ajustable y control de velocidad táctil.',
    icon: FaBolt
  },
  {
    id: 19,
    name: 'Micrófono Stream 192',
    cat: 'Accesorios',
    price: 84,
    rating: 4.8,
    desc: 'Condensador cardoide USB, brazo articulado y filtro anti-pop.',
    icon: FaMicrophone
  },
  {
    id: 20,
    name: 'Webcam Vision 4K',
    cat: 'Accesorios',
    price: 79,
    rating: 4.6,
    desc: '4K UHD 30fps, auto-enfoque y doble micrófono con reducción de ruido.',
    icon: FaVideo
  },
  {
    id: 21,
    name: 'Alfombrilla XL RGB',
    cat: 'Accesorios',
    price: 34,
    rating: 4.5,
    desc: 'Superficie de microfibra, 1000x400mm y retroiluminación sincronizable.',
    icon: FaLightbulb
  },
  {
    id: 22,
    name: 'Soporte de Micrófono',
    cat: 'Accesorios',
    price: 22,
    rating: 4.3,
    desc: 'Brazo articulado de acero con clamp y rosca universal.',
    icon: FaMicrophoneAlt
  },
  {
    id: 23,
    name: 'Hub USB-C Trust',
    cat: 'Accesorios',
    price: 18,
    rating: 4.4,
    desc: '7 puertos: USB-C, USB 3.0, HDMI y lectura de tarjetas SD.',
    icon: FaPlug
  },
  {
    id: 24,
    name: 'Kit de tiras RGB',
    cat: 'Accesorios',
    price: 26,
    rating: 4.6,
    desc: 'RGB direccionable, 2m con control remoto y app dedicada.',
    icon: FaPalette
  }
]

export const features = [
  {
    icon: FaTachometerAlt,
    title: 'Rendimiento Élite',
    desc: 'Componentes de última generación diseñados para dominar cada partida con 0 retrasos.'
  },
  {
    icon: FaShieldAlt,
    title: 'Garantía PRO',
    desc: 'Hasta 2 años de garantía oficial y soporte técnico dedicado en todos nuestros equipos.'
  },
  {
    icon: FaWifi,
    title: 'Conectividad Total',
    desc: 'Inalámbrico de baja latencia, Bluetooth y USB-C con carga rápida en todos los periféricos.'
  },
  {
    icon: FaCog,
    title: 'Personalización',
    desc: 'Software propio para macros, perfiles, DPI y un RGB sincronizado como ninguna otra marca.'
  }
]

export const infoHighlights = [
  {
    icon: FaMouse,
    title: 'Precisión Absoluta',
    desc: 'Sensores de hasta 30K DPI con tracking de 650 IPS para movimientos quirúrgicos.'
  },
  {
    icon: FaKeyboard,
    title: 'Teclado que siente',
    desc: 'Switches mecánicos probados para soportar +100 millones de pulsaciones.'
  },
  {
    icon: FaPalette,
    title: 'Identidad RGB',
    desc: 'Ecosistema de iluminación sincronizada entre mouse, teclado y headset.'
  },
  {
    icon: FaVolumeUp,
    title: 'Audio Inmersivo',
    desc: 'Realidad sonora con drivers de 50mm y micrófonos con cancelación activa.'
  },
  {
    icon: FaBolt,
    title: 'Carga Veloz',
    desc: 'Llegá hasta 40h de uso continuo con una carga de solo 15 minutos.'
  },
  {
    icon: FaMobileAlt,
    title: 'Multiplataforma',
    desc: 'Compatible con PC, consolas y móvil. Tu setup viaja con vos a todos lados.'
  }
]

export const emulators = [
  {
    name: 'BlueStacks',
    tag: 'El más popular',
    desc: 'El emulador de Android para PC más usado del mundo. Perfecto para juegos móviles con mouse y teclado.',
    features: ['Multi-instancia', 'Key mapping avanzado', 'Más de 2M de apps'],
    tier: 'TOP',
    url: 'https://www.bluestacks.com'
  },
  {
    name: 'LDPlayer',
    tag: 'Rendimiento puro',
    desc: 'Optimizado para títulos pesados con macros, grabación de scripts y alto FPS.',
    features: ['Macros por script', 'Soporte 120 FPS', 'Bajo consumo'],
    tier: 'PRO',
    url: 'https://www.ldplayer.net'
  },
  {
    name: 'MEmu',
    tag: 'El versátil',
    desc: 'Corre desde Android 5 hasta Android 12 y permite personalizar el key mapping hasta el detalle.',
    features: ['Multi-Android', 'Widgets nativos', 'Asistente de mapas'],
    tier: 'FULL',
    url: 'https://www.memuplay.com'
  },
  {
    name: 'Gameloop',
    tag: 'Oficial gaming',
    desc: 'El emulador oficial de títulos como Call of Duty Mobile y PUBG Mobile, hecho por Tencent.',
    features: ['Títulos oficiales', 'Shader cache rápida', 'Optimización por juego'],
    tier: 'ESPORT',
    url: 'https://www.gameloop.com'
  }
]

export const testimonials = [
  {
    name: 'Lucas "Demo" R.',
    role: 'Rival of Legends · Platino',
    quote: 'Cambié al MP-X1 y sentí la diferencia desde la primera partida. Sin dudas el mejor mouse que tuve.'
  },
  {
    name: 'Valeria "Nyx" C.',
    role: 'Streamer · +40K seguidores',
    quote: 'El headset Sonic me cambió los sound-tricks. Y la web es una maravilla, compré todo desde el carrito.'
  },
  {
    name: 'Gastón "Zerok" M.',
    role: 'CoD Mobile · Top 500',
    quote: 'Juego CoD en PC con Gameloop y mis periféricos Mobilador PRO brillan. El key mapping me salva cada partida.'
  }
]

export const stats = [
  { num: '+10K', lbl: 'Gamers PRO' },
  { num: '0ms', lbl: 'Latencia' },
  { num: '30K', lbl: 'DPI Máx' },
  { num: '2 años', lbl: 'Garantía' }
]

export const emulatorIcons = {
  FaRobot,
  FaGooglePlay,
  FaGripVertical,
  FaLock
}