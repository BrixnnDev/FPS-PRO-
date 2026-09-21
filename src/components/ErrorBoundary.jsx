import { Component } from 'react'

export default class ErrorBoundary extends Component {
  state = { error: null }

  static getDerivedStateFromError(error) {
    return { error }
  }

  componentDidCatch(error, info) {
    console.error('Mobilador PRO error:', error, info)
  }

  render() {
    if (this.state.error) {
      return (
        <div style={{ minHeight: '80vh', display: 'grid', placeItems: 'center', padding: 40, textAlign: 'center' }}>
          <div>
            <h2 style={{ marginBottom: 12 }}>Algo salió mal</h2>
            <p style={{ color: 'var(--muted)', marginBottom: 20, fontFamily: 'monospace' }}>
              {this.state.error.message}
            </p>
            <button className="btn btn-primary" onClick={() => this.setState({ error: null })}>
              Reintentar
            </button>
          </div>
        </div>
      )
    }
    return this.props.children
  }
}