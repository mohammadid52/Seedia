import errorAnimation from 'assets/animation/error.json'
import Lottie from 'react-lottie'

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: errorAnimation,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
}

const ErrorAnimation = () => {
  return (
    <Lottie
      isStopped={false}
      isPaused={false}
      options={defaultOptions}
      height={300}
      width={300}
    />
  )
}

export default ErrorAnimation
