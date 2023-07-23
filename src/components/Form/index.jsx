import { useForm } from "react-hook-form"
import "./styles.css"
import { api } from "../../lib/axios"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"

const postSchema = yup.object({
  title: yup.string().required(" O campo title não pode estar vazío"),
  description: yup
    .string()
    .required(" O campo description não pode estar vazío"),
  content: yup.string().required(" O content  não pode estar vazío"),
})

export function Form({ title, textButton }) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(postSchema),
  })

  function handleCreatePost(data) {
    api.post("/posts", data)
    console.log("Post criado !")
    reset()
  }

  return (
    <form onSubmit={handleSubmit(handleCreatePost)}>
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
