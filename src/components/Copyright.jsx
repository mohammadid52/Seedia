const Copyright = () => {
  const year = new Date().getFullYear()
  return (
    <div className="row absolute bottom-0 text-base w-full">
      <hr />
      <div className="light row ">
        <div className="text-center col-sm-6 col-md-12">
          <p className="copy-right">
            © {year} All rights reserved.{' '}
            <a href="/#" className="link link-hover">
              Accessibility{' '}
            </a>
            <a href="/#" className="link link-hover">
              User agreement{' '}
            </a>{' '}
            <a href="/#" className="link link-hover">
              Privacy &amp; Policy{' '}
            </a>
            <a href="/#" className="link link-hover">
              Cookies{' '}
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Copyright
