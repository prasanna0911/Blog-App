import React, { useContext, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import DataContext from './context/DataContext'

const EditPost = () => {
  const {posts,handleEdit,editBody,setEditBody,editTitle,setEditTitle}=useContext(DataContext)
  const {id}=useParams()
  const post=posts.find(post=>(post.id).toString()===id)

  useEffect(()=>{
    if(post){
        setEditTitle(post.title)
        setEditBody(post.body)
    }
  },[posts,setEditBody,setEditTitle])
return (
    <main className='NewPost'>
        {editTitle && 
            <>
                <h2>Edit Post</h2>
                <form className='newPostForm' onSubmit={(e)=>e.preventDefault()}>
                    <label htmlFor='postTitle'>Title:</label>
                    <input 
                        type='text'
                        id='postTitle'
                        value={editTitle}
                        onChange={(e)=>setEditTitle(e.target.value)}
                        required
                    />
                    <label htmlFor='postBody'>Body:</label>
                    <textarea 
                        type='text'
                        id='postBody'
                        value={editBody}
                        onChange={(e)=>setEditBody(e.target.value)}
                        required
                    />
                    <button type='submit' onClick={()=>handleEdit(post.id)}>Submit</button>
                </form>
            </>
        }
        {
          !editTitle && <>
          <h2>Page Not Found</h2>
          <p>Well thats disappointing</p>
          <p><Link to='/'>Visit Our Home Page</Link></p>
          </>
        }
    </main>
  )
}

export default EditPost