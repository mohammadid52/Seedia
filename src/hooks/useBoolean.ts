import { useState } from 'react'

const useBoolean = () => {
  const [state, setState] = useState(false)
  const show = () => {
    setState(true)
  }
  const close = () => {
    setState(false)
  }
  const toggleValue = () => {
    setState((prev) => !prev)
  }
  return [state, show, close, toggleValue]
}

export default useBoolean
