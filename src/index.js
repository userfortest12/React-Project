import React from 'react'
import ReactDOM from 'react-dom'
// import Primeiro from './componentes/Primeiro'
import Pai from './componentes/pai'
import Filhos from './componentes/filho'
// import Saudacao from './componentes/Saudacao'

ReactDOM.render(
    <div>
    <Pai nome="Paulo" sobrenome="Silva">
        <Filhos nome="Pedro" />
        <Filhos nome="Paulo" />
        <Filhos nome="Carla" />
    </Pai>
    </div>
    , document.getElementById('root'))