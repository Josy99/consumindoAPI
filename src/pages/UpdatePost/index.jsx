// import { useEffect } from "react"
import { Form } from "../../components/Form"
import { api } from "../../lib/axios"
import { useParams } from "react-router-dom"
import { useNavigate } from "react-router-dom"

export function UpdatePost() {
  const { id } = useParams()
  const navigate = useNavigate()

  function handleUpdatePost(data) {
    api.put(`/posts/${id}`, data)
    navigate("/")
  }

  // useEffect(() => {
  //   api.get(`/posts/${id}`).then((response) => console.log(response.data))
  // }, [])

  return (
    <div>
      <Form
        title={"Editar Publicação"}
        textButton={"Editar"}
        onAction={handleUpdatePost}
      />
    </div>
  )
}
