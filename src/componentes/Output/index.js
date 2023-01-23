import "./Output.css"

export default function Output(props) {
    return (
        <div className="senha-gerada">
            <p>{props.senha}</p>
            <button> Copiar </button>
        </div>
    )
}