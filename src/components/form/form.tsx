import { useState } from "react";

function Formulario(){
    function cadastrarUsuario(e: React.FormEvent<HTMLFormElement>){
        e.preventDefault();
        console.log("cadastrar usuário")
        console.log(name)
        console.log(password)
    }

const [name, setName] = useState("");
const [password, setPassword] = useState("");

    return(
        <>
            <h1>Meu Cadastro</h1>
            <form onSubmit={cadastrarUsuario}>
                <div>
                    <label htmlFor="name">
                        Nome: 
                    </label>
                    <input 
                        type="text" 
                        placeholder="Digite o seu nome" 
                        id="name"
                        name="name" 
                        value={name} 
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="password">
                        Senha: 
                    </label>
                    <input 
                        type="password" 
                        placeholder="Digite a sua senha" 
                        id="password" 
                        name="password" 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div>
                    <input type="submit" value="Cadastrar" />
                </div>
            </form>
        </>
    );
}

export default Formulario;