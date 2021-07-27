const navigation = [
  { name: 'Accessibility', href: '#/' },
  { name: 'User Agreement', href: '#/' },
  { name: 'Privacy & Policy', href: '#/' },
  { name: 'Cookies', href: '#/' },
]
const Copyright = () => {
  const year = new Date().getFullYear()
  return (
    <div className="row absolute bottom-0 text-base w-full">
      <hr />
      <div className="light row mt-2">
        <div className="text-center col-sm-6 col-md-12">
          <p className="copy-right">
            © {year} All rights reserved.{'  '}
            {navigation.map((link) => (
              <a href={link.href} className="link link-hover">
                {link.name}
              </a>
            ))}
          </p>
        </div>
      </div>
    </div>
  )
}

export default Copyright
