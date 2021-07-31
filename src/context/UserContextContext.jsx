import React, { useContext, createContext, useState } from 'react'

const UserContext = createContext(null)

const UserContextProvider = ({ children }) => {
  const [values, setValues] = useState({})

  return (
    <UserContext.Provider value={{ values, setValues }}>
      {children}
    </UserContext.Provider>
  )
}

export const useUserContext = () => useContext(UserContext)

export default UserContextProvider
