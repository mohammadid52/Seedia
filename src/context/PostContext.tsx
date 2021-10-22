import React, { createContext, useContext, useState } from 'react'

const PostContext = createContext(null)

const PostContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [newPostAdded, setNewPostAdded] = useState(false)

  return (
    <PostContext.Provider
      // @ts-ignore
      value={{
        newPostAdded,
        setNewPostAdded,
      }}
    >
      {children}
    </PostContext.Provider>
  )
}

export const usePostContext: any = () => useContext(PostContext)

export default PostContextProvider
