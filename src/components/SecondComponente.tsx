import React from 'react'

interface Props  
{name:string}

const SecondComponente = (props: Props) => {
  return (
    <div>
        <p>Segundo componente</p>
        <p>Nome dele é {props.name}</p>
    </div>
  )
}

export default SecondComponente