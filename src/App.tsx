import React from 'react';
import Teste from './components/button/teste';
import TesteProp from './components/prop/testeProp';
import Pessoa from './components/pessoa/pessoa';
import Lista from './components/fragment/lista';
import Evento from './components/evento/evento';
import Formulario from './components/form/form';

function App() {
  return (
    <div className="App">
       <Teste/>
       <TesteProp name='Sim' />
       <Pessoa 
          foto='https://via.placeholder.com/150'
          nome='John' 
          idade='20' 
          profissao='Programador'
        />
        <Lista/>
        <Evento/>
        <Formulario/>
    </div>
   
  );
}

export default App;
