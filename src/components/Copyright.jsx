const navigation = [
  { name: 'Accessibility', href: '#/' },
  { name: 'User Agreement', href: '#/' },
  { name: 'Privacy & Policy', href: '#/' },
  { name: 'Cookies', href: '#/' },
]
const Copyright = () => {
  const year = new Date().getFullYear()
  return (
    <footer className="">
      <div className="max-w-7xl mx-auto pt-16 px-4 overflow-hidden sm:px-6 lg:px-8">
        <nav
          className="-mx-5 lg:flex md:flex sm:grid sm:place-content-center sm:grid-cols-1 flex-wrap justify-center"
          aria-label="Footer"
        >
          {navigation.map((item) => (
            <div key={item.name} className="text-center px-5 py-2">
              <li
                href={item.href}
                className="list-none link-hover text-base text-gray-500 cursor-pointer"
              >
                {item.name}
              </li>
            </div>
          ))}
        </nav>

        <p className="mt-8 text-center text-base text-gray-400">
          &copy; {year} Workflow, Inc. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Copyright
