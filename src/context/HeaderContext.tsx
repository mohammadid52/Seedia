import React, { createContext, useContext, useState } from 'react'

const HeaderContext = createContext(null)
type IState = 'products' | 'jobs'

const HeaderContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [pageState, setPageState] = useState<IState>('jobs')

  const [isSearched, setIsSearched] = useState(false)

  return (
    <HeaderContext.Provider
      // @ts-ignore
      value={{
        pageState,
        isSearched,
        setIsSearched,
        setPageState,
      }}
    >
      {children}
    </HeaderContext.Provider>
  )
}

export const useHeaderContext: any = () => useContext(HeaderContext)

export default HeaderContextProvider
