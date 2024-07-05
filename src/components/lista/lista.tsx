type ListaProps = {
    itens: Array<string>
}

const OutraLista: React.FC<ListaProps> = ({itens}) => {
    return(
        <>
            <h3>Lista de Frameworks</h3>
            {itens.length > 0 ? (
                itens.map((item, index) => (
                    <p id={index.toString()}>{item}</p>
                ))) : (
                    <p>Não há itens na lista</p>
                )
            }
        </>
    );
}

export default OutraLista;