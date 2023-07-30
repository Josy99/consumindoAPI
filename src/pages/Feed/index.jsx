import { useEffect, useState } from "react"
import { Card } from "../../components/Card"
import "./styles.css"
import { api } from "../../lib/axios"

export function Feed() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    api
      .get("/posts")
      .then((response) => {
        setPosts(response.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])
  //Eliminando comentário
  function handleDeletePost(id) {
    setPosts(posts.filter((post) => post.id !== id))
    api.delete(`/posts/${id}`)
  }

  return (
    <div className="feedContainer">
      {posts.map((post) => (
        <Card key={post.id} post={post} onDeletepost={handleDeletePost} />
      ))}
    </div>
  )
}
