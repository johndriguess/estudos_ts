import { useState } from "react";
import Condicional from "../components/condicional/condicional";
import Evento from "../components/evento/evento";
import Formulario from "../components/form/form";
import Lista from "../components/fragment/lista";
import OutraLista from "../components/lista/lista";
import Pessoa from "../components/pessoa/pessoa";
import TesteProp from "../components/prop/testeProp";
import SeuNome from "../components/statelift/SeuNome";
import Saudacao from "../components/statelift/saudacao";
import Teste from "../components/testeComponente/teste";

function Estudos(){
    const [nome,setNome] = useState<string>("")
    const meusItens = ['React','Vue','Angular']
    return(
        <div>
            <h1>Estudos</h1>
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
            <h1>Renderização Condicional</h1>
            <Condicional/>
            <OutraLista itens={meusItens}/>
            <OutraLista itens={[]}/>
            <SeuNome setNome={setNome}/>
            {nome && (
                <Saudacao nome={nome}/>
            )
                }
        </div>
    );
}

export default Estudos