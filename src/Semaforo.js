import Luz from './Luz'

function Semaforo({ corAtual }) {
  const cores = ['vermelho', 'amarelo', 'verde']

  return (
    <div className="semaforo">
      <div className="caixa">
        {cores.map((cor) => (
          <Luz key={cor} cor={cor} acesa={corAtual === cor} />
        ))}
      </div>
      <div className="haste" />
      <div className="base" />
    </div>
  )
}

export default Semaforo
