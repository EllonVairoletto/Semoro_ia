function Luz({ cor, acesa }) {
  return (
    <div
      className={`luz ${cor} ${acesa ? 'acesa' : ''}`}
      aria-label={`Luz ${cor}${acesa ? ' acesa' : ' apagada'}`}
    />
  )
}

export default Luz
