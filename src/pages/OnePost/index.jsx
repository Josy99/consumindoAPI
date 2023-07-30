import { useEffect, useState } from "react"
import "./styles.css"
import { useParams } from "react-router-dom"
import { api } from "../../lib/axios"

//erificando um post
export function OnePost() {
  const [post, setPost] = useState({})
  const { id } = useParams()

  useEffect(() => {
    api
      .get(`/posts/${id}`)
      .then((response) => setPost(response.data))
      .catch((err) => console.log(err))
  }, [])

  return (
    <article className="onePostContainer">
      <h2>{post.title}</h2>
      <p>{post.content}</p>
    </article>
  )
}
