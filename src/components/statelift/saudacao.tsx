type SaudacaoProps = {
    nome: string
}

const Saudacao: React.FC<SaudacaoProps> = ({nome}) => {
    return(
        <>
            <p>Olá {nome}, seja bem-vindo!</p>
        </>
    );
}

export default Saudacao