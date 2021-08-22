import { useState } from 'react'
import { wait } from 'utils/wait'
import Button from './atoms/Button'
import Card from './atoms/Card'

const ListCard = ({ user }) => {
  const [status, setStatus] = useState('no_connection')
  const generateStatus = () => {
    switch (status) {
      case 'no_connection':
        return 'Make a connection'
      case 'pending':
        return 'Pending'
      case 'connection':
        return 'Connection'
      default:
        return 'Make a connection'
    }
  }

  const onClick = () => {
    if (status === 'no_connection') {
      setStatus('pending')
      wait(2000).then(() => setStatus('connection'))
    } else {
      setStatus('no_connection')
    }
  }

  return (
    <Card
      className="mb-4 flex items-center justify-center"
      content={
        <div className="rounded-lg  text-center ">
          <div className="">
            <div>
              <img
                // src={process.env.PUBLIC_URL + '/logo.png'}
                src={
                  'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80'
                }
                alt=""
                className="h-36 w-auto rounded-full inline-block"
              />
            </div>

            <div className=" mt-3 p-0 text-center space-y-2">
              <h5 className="font-semibold dark:text-white text-gray-900">
                {user.name}
              </h5>
              <p className="text-gray-400 font-semibold dark:text-gray-500">
                Software Engineer at Google
              </p>
              <p className="italic tracking-wide text-center pb-0 mb-1 text-gray-400 dark:text-gray-500 text-xs">
                Based on your profile
              </p>
              <div className="flex items-center justify-center">
                <Button
                  gradient
                  onClick={onClick}
                  size="sm"
                  rounded="rounded-lg"
                  label={generateStatus()}
                />
              </div>
            </div>
          </div>
        </div>
      }
    />
  )
}

export default ListCard
