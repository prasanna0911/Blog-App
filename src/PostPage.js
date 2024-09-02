import React, { useContext } from 'react'
import { Link, useParams } from 'react-router-dom'
import DataContext from './context/DataContext'
//import { Link, Outlet } from 'react-router-dom'
const PostPage = () => {
  const {posts,handleDelete}=useContext(DataContext)
  const {id}=useParams()
  const post=posts.find(post=>(post.id).toString()===id)
  return (
    <main className='PostPage'>
      <article className='post'>
        {
          post && <>
          <h2>{post.title}</h2>
          <p className='postDate'>{post.datetime}</p>
          <p className='postBody'>{post.body}</p>
          <button className='deleteButton' onClick={()=>handleDelete(post.id)}>Delete Post</button>
          <Link to={`/edit/${post.id}`}><button className='editButton'>Edit Post</button></Link>
          </>
        }
        {
          !post && <>
          <h2>Page Not Found</h2>
          <p>Well thats disappointing</p>
          <p><Link to='/'>Visit Our Home Page</Link></p>
          </>
        }
      </article>
    </main>
  )
}

export default PostPage