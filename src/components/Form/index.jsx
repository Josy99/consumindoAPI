import { useForm } from "react-hook-form"
import "./styles.css"
import { api } from "../../lib/axios"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { useParams } from "react-router-dom"
import { useEffect } from "react"
// import { useNavigate } from "react-router-dom"

const postSchema = yup.object({
  title: yup.string().required(" O campo title não pode estar vazío"),
  description: yup
    .string()
    .required(" O campo description não pode estar vazío"),
  content: yup.string().required(" O content  não pode estar vazío"),
})

export function Form({ title, textButton, onAction }) {
  const { id } = useParams()
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(postSchema),
  })
  //resultado dos dados por editar
  async function getDataUpdate() {
    const response = await api.get(`/posts/${id}`)
    reset(response.data)
  }
  useEffect(() => {
    getDataUpdate()
  }, [])
  //
  return (
    <form onSubmit={handleSubmit(onAction)}>
      <h2>{title}</h2>
      <div className="field">
        <input placeholder="Título" {...register("title")} />
        {errors.title?.message}
      </div>

      <div className="field">
        <input placeholder="Descrição" {...register("description")} />
        {errors.description?.message}
      </div>

      <div className="field">
        <textarea placeholder="Descrição" {...register("content")} />
        {errors.content?.message}
      </div>

      <button type="submit">{textButton}</button>
    </form>
  )
}
