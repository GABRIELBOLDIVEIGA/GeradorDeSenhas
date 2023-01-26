import "./Output.css";
import copy from "copy-to-clipboard";

export default function Output({ senha, placeholder }) {
    const copiar = () => {
        copy(senha);
        console.log("Texto copiado: " + senha);
    };

    return (
        <>
            <div className="senha-gerada">
                {<p>{senha ? senha : placeholder}</p>}
                
                <button title="Copiar" onClick={copiar}></button>
            </div>
            <span className="span-alert">Senha Copiada</span>
        </>
    );
}
