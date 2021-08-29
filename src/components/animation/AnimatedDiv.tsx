import { motion } from 'framer-motion'

const AnimatedDiv = ({
  children,
  delay = 0.3,
  className,
  ...rest
}: {
  delay?: number
  className?: string
  children: React.ReactNode
}) => {
  return (
    <motion.div
      className={className}
      {...rest}
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={{
        hidden: {
          visibility: 'hidden',
          opacity: 0,
          translateX: 100,
        },
        visible: {
          visibility: 'visible',
          translateX: 0,
          opacity: 1,
          transition: {
            delay,
          },
        },
        exit: {
          visibility: 'hidden',
          opacity: 0,
          translateX: -100,
          transition: {
            delay,
          },
        },
      }}
    >
      <>{children}</>
    </motion.div>
  )
}

export default AnimatedDiv
