import "./Output.css";
import copy from "copy-to-clipboard";

export default function Output({ senha, placeholder }) {
    const copiar = () => {
        copy(senha);
    };

    return (
        <div className="senha-gerada">
            {<p>{senha ? senha : placeholder}</p>}
            <button onClick={copiar}> Copiar </button>
        </div>
    );
}
