import { Form } from "../../components/Form"
import "./styles.css"
import { useNavigate } from "react-router-dom"
import { api } from "../../lib/axios"

export function CreatePost() {
  const navigate = useNavigate()

  function handleCreatePost(data) {
    api.post("/posts", data)
    console.log("Feito com sucesso !")
    navigate("/")
    // reset()
  }

  return (
    <div>
      <Form
        title={"Criar Publicação"}
        textButton={"Enviar"}
        onAction={handleCreatePost}
      />
    </div>
  )
}
