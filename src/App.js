import "./App.css";
import Output from "./componentes/Output";
import Form from "./componentes/Form";
import { useState } from "react";

function App() {
    const [senha, setSenha] = useState("");

    const mostraSenha = (senha) => {
        setSenha(senha);
        // console.log("Output: ", senha);
    };

    return (
        <div className="App">
            <h1>Gerador de Senhas</h1>
            <Output senha={senha} placeholder={"Nova Senha Aqui"}/>
            <Form senhaNova={(senha) => mostraSenha(senha)} />
        </div>
    );
}

export default App;
