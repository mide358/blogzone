// import { useContext } from 'react'
// import DataContext from './context/DataContext'
import { useStoreActions, useStoreState } from 'easy-peasy'
import { useParams, Link, useNavigate } from 'react-router-dom'
// import api from './api/posts'

const PostPage = () => {
  const { id } = useParams()

  const deletePost = useStoreActions((actions) => actions.deletePost)
  const getPostById = useStoreState((state) => state.getPostById)
  const post = getPostById(id)

  let navigate = useNavigate()

  const handleDelete = (id) => {
    deletePost(id)
    navigate('/')
  }

  return (
    <main className="PostPage">
      <article className="post">
        {post && (
          <>
            <h2>{post.title}</h2>
            <p className="postDate">{post.datetime}</p>
            <p className="postBody">{post.body}</p>
            <Link to={`/edit/${post.id}`}>
              <button className="editButton">Edit Post</button>
            </Link>
            <button
              className="deleteButton"
              onClick={() => handleDelete(post.id)}
            >
              Delete Post
            </button>
          </>
        )}
        {!post && (
          <>
            <h2>Post Not Found</h2>
            <p>Post is no longer here</p>
            <p>
              <Link to="/"> Visit our homepage</Link>
            </p>
          </>
        )}
      </article>
    </main>
  )
}

export default PostPage
