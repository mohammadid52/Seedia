import { useEffect, useState } from 'react'

const useOnScreen = (ref: any, rootMargin: string = '0px') => {
  const [isIntersecting, setIntersecting] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIntersecting(entry.isIntersecting),
      {
        rootMargin,
      }
    )

    if (ref.current) {
      observer.observe(ref.current!)
      // Remove the observer as soon as the component is unmounted
    }
    return () => {
      observer.disconnect()
    }
  }, [ref])

  return isIntersecting
}

export default useOnScreen
