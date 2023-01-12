import axios from "axios"
import React from "react"
import { useState } from "react"
import { useEffect } from "react"
import "./css/comments.css"
import { useNavigate } from "react-router-dom"
import jwt from "jwt-decode"

function Comments() {
  const [comments, setComments] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    const token = localStorage.getItem("token")
    if (token) {
      const user = jwt(token)

      if (user) {
        getComments()
      } else {
        navigate("/login")
      }
    } else {
      navigate("/login")
    }
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
            <span className="comments-name">
              {comments.name.charAt(0).toUpperCase() + comments.name.slice(1)}
            </span>
            <span>({comments.email})</span>

            <p>{comments.comment}</p>
          </div>
        )
      })}
    </div>
  )
}

export default Comments
