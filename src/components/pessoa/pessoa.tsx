import React from 'react';

type PessoaProps = {
    foto: string;
    nome: string;
    idade: string;
    profissao: string;
}

const Pessoa: React.FC<PessoaProps> = ({foto, nome, idade, profissao}) => {
    return (
        <div>
            <img src={foto} alt={nome} />
            <h2>Nome: {nome}</h2>
            <p>Idade: {idade}</p>
            <p>Profissão: {profissao}</p>
        </div>
    );
}

export default Pessoa;
