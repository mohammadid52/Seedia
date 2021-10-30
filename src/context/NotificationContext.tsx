import React, { createContext, useContext, useState } from 'react'

const NotificationContext = createContext(null)
type INotification = {
  show: boolean
  title: string
  buttonText?: string
  buttonUrl?: string
}

const NotificationContextProvider = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const [notification, setNotification] = useState<INotification>({
    show: false,
    title: '',

    buttonText: '',
    buttonUrl: '',
  })
  const hideNotification = () => {
    setNotification({ ...notification, show: false })
  }

  return (
    <NotificationContext.Provider
      // @ts-ignore
      value={{
        notification,
        setNotification,
        hideNotification,
      }}
    >
      {children}
    </NotificationContext.Provider>
  )
}

export const useNotifications = (): {
  notification: INotification
  setNotification: React.Dispatch<React.SetStateAction<INotification>>
  hideNotification: () => void
} => useContext(NotificationContext)

export default NotificationContextProvider
