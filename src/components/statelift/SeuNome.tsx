type SeuNomeProps = {
    setNome: React.Dispatch<React.SetStateAction<string>>
}

const SeuNome: React.FC<SeuNomeProps> = ({setNome}) => {
    return(
        <>
            <p>Digite o seu nome:</p>
            <input type="text" placeholder="Qual é o seu nome?" onChange={(e) => setNome(e.target.value)}/>
        </>
    );
}

export default SeuNome;