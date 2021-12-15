import { IPost } from 'interfaces/UniversalInterface'
import React, { createContext, useContext, useState } from 'react'

const PostContext = createContext(null)

const PostContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [posts, setPosts] = useState([])
  return (
    <PostContext.Provider
      // @ts-ignore
      value={{
        posts,
        setPosts,
      }}
    >
      {children}
    </PostContext.Provider>
  )
}
export const usePostContext = (): {
  posts: IPost[]
  setPosts: React.Dispatch<React.SetStateAction<IPost[]>>
} => useContext(PostContext)

export default PostContextProvider
