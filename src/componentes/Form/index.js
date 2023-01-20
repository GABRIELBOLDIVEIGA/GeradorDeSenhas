import { useState } from "react";
import "./Form.css";
import geraSenha from "../GeraSenha";

export default function Fomr() {
    const [inputMaiusculo, setinputMaiusculo] = useState(false);
    const [inputMinusculo, setinputMinusculo] = useState(false);
    const [inputNumero, setinputNumero] = useState(false);
    const [inputSimbolo, setinputSimbolo] = useState(false);
    const [inputRange, setinputRange] = useState("4");

    const handleChange = (e) => {
        switch (e.target.id) {
            case "letrasMaiusculas":
                setinputMaiusculo(e.target.checked);
                break;
            case "letrasMinusculas":
                setinputMinusculo(e.target.checked);
                break;
            case "numeros":
                setinputNumero(e.target.checked);
                break;
            case "simbolos":
                setinputSimbolo(e.target.checked);
                break;
        }
    };

    const Submit = (e) => {
        e.preventDefault();
        geraSenha(inputRange, inputMaiusculo, inputMinusculo, inputNumero, inputSimbolo)
    }

    return (
        <>
            <form className="formulario" onSubmit={Submit}>
                <div className="slider">
                    <label>
                        Tamanho da Senha <span>20</span>
                    </label>
                    <input type="range" min="8" max="20" />
                </div>
                <div className="lista-checkbox">
                    <div>
                        <label>
                            <input type="checkbox" id="letrasMaiusculas" onChange={handleChange} />
                            Incluir Letras Maiúsculas
                        </label>
                    </div>
                    <div>
                        <label>
                            <input type="checkbox" id="letrasMinusculas" onChange={handleChange} />
                            Incluir Letras Minúsculas
                        </label>
                    </div>
                    <div>
                        <label>
                            <input type="checkbox" id="numeros" onChange={handleChange} />
                            Incluir Números
                        </label>
                    </div>
                    <div>
                        <label>
                            <input type="checkbox" id="simbolos" onChange={handleChange} />
                            Incluir Simbolos
                        </label>
                    </div>
                </div>

                <button> GERAR SENHA </button>
            </form>
        </>
    );
}
