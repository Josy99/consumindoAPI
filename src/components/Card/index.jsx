import "./styles.css"
import { MdDelete } from "react-icons/md"

export function Card({ item }) {
  return (
    <article className="cardContainer">
      <header>
        <h2>{item.title}</h2>
        <MdDelete size={28} color="#ed4337" />
      </header>
      <p>{item.description}</p>

      <div className="buttonsContainer">
        <button>Ver publicação</button>
        <button>Atualizar</button>
      </div>
    </article>
  )
}
