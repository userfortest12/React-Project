import React from 'react'

export default test => 
/*Para ter dois ou mais element em um componentes preciso colocar dentro de uma div ou 
semelhantes, já que o react não aceita mais de uma tag por componente.

 <div> 
    <h1>bom dia {test.nome}</h1>
    <h2>Good morning</h2>
</div> 

tem esse jeito */



<React.Fragment> 
    <h1>bom dia {test.nome}</h1>
    <h2>Good morning</h2>
</React.Fragment> // ou desse jeito