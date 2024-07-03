function Evento(){

function meuEvento(){
    console.log("Fui clicado")
}

    return(
        <>
            <p>Clique aqui para disparar um evento</p>
            <button onClick={meuEvento}>Ativar!</button>
        </>
    );
}

export default Evento;