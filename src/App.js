import { useState } from 'react'
import Semaforo from './Semaforo'
import './App.css'

const CORES = ['vermelho', 'amarelo', 'verde']

function App() {
  const [corAtual, setCorAtual] = useState('vermelho')

  function mudarCor() {
    setCorAtual((cor) => {
      const indice = CORES.indexOf(cor)
      return CORES[(indice + 1) % CORES.length]
    })
  }

  return (
    <main className="app">
      <h1>Semáforo</h1>
      <p className="status">
        Cor atual: <strong>{corAtual}</strong>
      </p>
      <Semaforo corAtual={corAtual} />
      <button type="button" className="botao" onClick={mudarCor}>
        Mudar cor
      </button>
    </main>
  )
}

export default App
