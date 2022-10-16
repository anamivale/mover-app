import axios from "axios"
import React from "react"
import { useState } from "react"
import { useEffect } from "react"
import "./css/comments.css"

function Comments() {
  const [comments, setComments] = useState([])
  useEffect(() => {
    getComments()
  }, [])

  const getComments = () => {
    try {
      axios.get("http://localhost:4002/comments").then((res) => {
        setComments(res.data)
      })
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div className="comments">
      <h1 className="h1">Comments</h1>

      {comments.map((comments) => {
        return (
          <div className=" comment">
            <span className="comments-name">{comments.name}</span>
            <span>({comments.email})</span>

            <p>{comments.comment}</p>
          </div>
        )
      })}
    </div>
  )
}

export default Comments
