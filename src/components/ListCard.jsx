import { useState } from 'react'
import Button from './atoms/Button'

const wait = (timeout) => {
  return new Promise((resolve) => setTimeout(resolve, timeout))
}

const ListCard = ({ imgUrl }) => {
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
    <div className="justify-center  flex col-lg-4 col-md-4 col-sm-12 float-left row">
      <div className="float-left rounded-lg card-width  col">
        <div className="rounded-lg p-3 customShadow">
          <div className=" col-sm-12  card-title"></div>
          <div>
            <div className="text-center col">
              <div>
                <img
                  // src={process.env.PUBLIC_URL + '/logo.png'}
                  src={imgUrl}
                  alt=""
                  className="h-36 w-auto rounded-full inline-block"
                />
              </div>
            </div>
          </div>
          <div>
            <div className=" mt-3 p-0 text-center col">
              <h5 className="font-semibold">Sample One</h5>
              <p
                style={{
                  color: 'rgb(120, 113, 113)',
                }}
              >
                <span>Software Engineer</span>
                <span> at </span>
                <span>Google</span>
              </p>
            </div>

            <p className="italic text-center pb-0 mb-1 text-gray-400 text-xs">
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
    </div>
  )
}

export default ListCard
