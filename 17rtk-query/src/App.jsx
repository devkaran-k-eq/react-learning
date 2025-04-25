import { useState } from 'react'
import './App.css'
import { useGetPostsQuery, useCreatePostsMutation } from './services/jsonPlaceholderAPI'


function App() {
  const [newPost, setNewPost] = useState({ title: "", body: "", id: 9999 })

  const { data, error, isLoading } = useGetPostsQuery();

  const [createPost, { isLoading: isCreating, error: createError }] = useCreatePostsMutation();

  if (isLoading) return <p>Loading ...</p>

  if (error) return <p>There was an error ( o.o ) </p>

  console.log(data);

  const handleCreatePost = async () => {
      await createPost(newPost)
  }

  return (
    <>
      <h1>⎛⎝ ≽  &gt;  ⩊   &lt; ≼ ⎠⎞</h1>

      <h1> Ek like se billi ka dil khush, aur website ka swag double! 😺 "ミ◕ฺｖ◕ฺ彡"</h1>

      <input type="text" placeholder='Title...' onChange={(e) => setNewPost(prev => ({ ...prev, title: e.target.value }))} />
      <br />
      <input type="text" placeholder='Body...' onChange={(e) => setNewPost(prev => ({ ...prev, title: e.target.value }))} />

      <button onClick={handleCreatePost}>{" "} Create Post {" "}</button>
      <div>
        {
          data?.map(
            (post) => (
              <p key={post.id}>{post.title}</p>
            )
          )
        }
      </div>
    </>
  )
}

export default App