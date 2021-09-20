import React from "react";

export default (props)=>
{
  return(
    <div>
      <h4>Ola {props.nome}</h4>
      <h4>Meu sobrenome é {props.sobrenome}</h4>
      <h4>Tenho {props.idade} anos</h4>
    </div>
  )
}

