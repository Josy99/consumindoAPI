import "./styles.css"
import { MdDelete } from "react-icons/md"
import { useNavigate } from "react-router-dom"

export function Card({ post, onDeletepost }) {
  const navigate = useNavigate()

  function passId() {
    onDeletepost(post.id)
  }

  return (
    <article className="cardContainer">
      <header>
        <h2>{post.title}</h2>
        <MdDelete size={28} color="#ed4337" onClick={passId} />
      </header>
      <p>{post.description}</p>
      <div className="buttonsContainer">
        <button onClick={() => navigate(`/onePost/${post.id}`)}>
          Ver publicação
        </button>
        <button onClick={() => navigate(`/updatePost/${post.id}`)}>
          Atualizar
        </button>
      </div>
    </article>
  )
}
