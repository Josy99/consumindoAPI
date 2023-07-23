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

  return (
    <div className="feedContainer">
      {posts.map((item, index) => (
        <Card item={item} key={index} />
      ))}
    </div>
  )
}
