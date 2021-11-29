// import { useContext, useState } from 'react'
// import DataContext from './context/DataContext'
import { useStoreActions, useStoreState } from 'easy-peasy'
import { format } from 'date-fns'
import { useNavigate } from 'react-router-dom'
// import api from './api/posts'

const NewPost = () => {
  let navigate = useNavigate()

  const posts = useStoreState((state) => state.posts)
  const postTitle = useStoreState((state) => state.postTitle)
  const postBody = useStoreState((state) => state.postBody)

  const savePost = useStoreActions((actions) => actions.savePost)
  const setPostTitle = useStoreActions((actions) => actions.setPostTitle)
  const setPostBody = useStoreActions((actions) => actions.setPostBody)

  const handleSubmit = (e) => {
    e.preventDefault()
    const id = posts.length ? posts[posts.length - 1].id + 1 : 1
    const datetime = format(new Date(), 'MMMM dd, yyyy pp')
    const newPost = { id, title: postTitle, datetime, body: postBody }
    savePost(newPost)
    navigate('/')
  }
  return (
    <main className="NewPost">
      <h2>Newpost</h2>
      <form className="newPostForm" onSubmit={handleSubmit}>
        <label htmlFor="postTitle">Title:</label>
        <input
          id="postTitle"
          type="text"
          required
          value={postTitle}
          onChange={(e) => setPostTitle(e.target.value)}
        />
        <label htmlFor="postBody">Post:</label>
        <textarea
          id="postbody"
          required
          value={postBody}
          onChange={(e) => setPostBody(e.target.value)}
        />
        <button type="button">Submit</button>
      </form>
    </main>
  )
}

export default NewPost
