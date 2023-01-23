import { useState } from "react";
import "./Form.css";
import geraSenha from "../GeraSenha";

export default function Fomr({senhaNova}) {
    const [inputMaiusculo, setinputMaiusculo] = useState(false);
    const [inputMinusculo, setinputMinusculo] = useState(false);
    const [inputNumero, setinputNumero] = useState(false);
    const [inputSimbolo, setinputSimbolo] = useState(false);
    const [inputRange, setinputRange] = useState("15");

    const handleChangeCheckBox = (e) => {
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
            default:
        }
    };

    function handleChangeRange(e) {
        setinputRange(e.target.value);
    }

    const Submit = (e) => {
        e.preventDefault();
        const senha = geraSenha(inputRange, inputMaiusculo, inputMinusculo, inputNumero, inputSimbolo);
        senhaNova(senha);
        // console.log("Senha Gerada:", senha);
    };

    return (
        <>
            <form className="formulario" onSubmit={Submit}>
                <div className="slider">
                    <label>
                        Tamanho da Senha <span>{inputRange}</span>
                    </label>
                    <input type="range" value={inputRange} min="5" max="25" onChange={handleChangeRange} />
                </div>
                <div className="lista-checkbox">
                    <div>
                        <label>
                            <input type="checkbox" id="letrasMaiusculas" onChange={handleChangeCheckBox} />
                            Incluir Letras Maiúsculas
                        </label>
                    </div>
                    <div>
                        <label>
                            <input type="checkbox" id="letrasMinusculas" onChange={handleChangeCheckBox} />
                            Incluir Letras Minúsculas
                        </label>
                    </div>
                    <div>
                        <label>
                            <input type="checkbox" id="numeros" onChange={handleChangeCheckBox} />
                            Incluir Números
                        </label>
                    </div>
                    <div>
                        <label>
                            <input type="checkbox" id="simbolos" onChange={handleChangeCheckBox} />
                            Incluir Simbolos
                        </label>
                    </div>
                </div>

                <button> Gerar Senha </button>
            </form>
        </>
    );
}
