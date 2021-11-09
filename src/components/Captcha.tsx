import React from 'react'
import Recaptch from 'react-recaptcha'

const Captcha = ({
  setIsVerified,
}: {
  setIsVerified: React.Dispatch<React.SetStateAction<boolean>>
}) => {
  const handleLoad = () => {
    // console.log('Loaded')
  }

  const verify = (res: any) => {
    if (res) {
      setIsVerified(true)
    } else {
      setIsVerified(false)
    }
  }

  return (
    <div>
      <Recaptch
        sitekey={'6LcOlUUcAAAAACR1PIL8ZHKU5wntAf43UUcBtMv6'}
        render="onload"
        verifyCallback={verify}
        onloadCallback={handleLoad}
      />
    </div>
  )
}

export default Captcha
