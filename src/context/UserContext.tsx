import { getUserValues } from 'helpers'
import { IParent } from 'interfaces/UniversalInterface'
import { isEmpty } from 'lodash'
import React, { useContext, createContext, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setUser } from 'state/Redux/Actions/authActions'
import { setValues } from 'state/Redux/Actions/userActions'

const UserContext = createContext(null)

const UserContextProvider = ({ children }: { children: React.ReactNode }) => {
  const dispatch = useDispatch()
  const [darkMode, setDarkMode] = useState(true)
  const values = useSelector((state) => getUserValues(state))

  const _setValues = (newData: any) => {
    dispatch(setUser(newData))
  }
  const isUser = !isEmpty(values)

  const userData: IParent = isUser ? values : undefined
  console.log(
    '🚀 ~ file: UserContext.tsx ~ line 21 ~ UserContextProvider ~ userData',
    userData
  )

  return (
    <UserContext.Provider
      // @ts-ignore
      value={{
        values: userData,
        setValues: _setValues,
        dispatch,
        darkMode,
        setDarkMode,
      }}
    >
      {children}
    </UserContext.Provider>
  )
}

export const useUserContext: any = () => useContext(UserContext)

export default UserContextProvider
