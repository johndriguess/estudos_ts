import { useState } from "react";

function Condicional(){

    const [email, setEmail] = useState<string>("");
    const [userEmail,setUserEmail] = useState<string>("");

    function enviarEmail(e: React.FormEvent<HTMLFormElement>){
        e.preventDefault()
        setUserEmail(email)
        console.log("Testando enviar e-mail", userEmail)
    }

    function limparEmail(){
        setEmail("")
        setUserEmail("")
    }

    return(
        <>
            <h2>Cadastre seu email: </h2>
            <form onSubmit={enviarEmail}>
                <input 
                    type="email" 
                    placeholder="Digite o seu e-mail..."
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <button type="submit">Enviar E-mail</button>
                {userEmail && (
                    <div>
                        <p>O e-mail do usuário é: {userEmail}</p>
                        <button onClick={limparEmail}>Limpar Email</button>
                    </div>
                    
                )}
            </form>
            
        </>
    )
}

export default Condicional;