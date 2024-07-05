import Button from "../button/button";

function Evento(){
    function meuEvento(){
        console.log("Fui clicado")
    }
    return(
        <>
            <p>Clique aqui para disparar um evento</p>
            <Button evento={meuEvento} text="Primeiro Evento" />
        </>
    );
}

export default Evento;