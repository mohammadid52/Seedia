import { Disclosure, Menu, Transition } from '@headlessui/react'
import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline'
import { SearchIcon } from '@heroicons/react/solid'
import { links } from 'constants/Links'
import { useHeaderContext } from 'context/HeaderContext'
import { IParent } from 'interfaces/UniversalInterface'
import filter from 'lodash/filter'
import queryString from 'query-string'
import { Fragment, useEffect, useState } from 'react'
import { BsBag } from 'react-icons/bs'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { logOut } from 'state/Redux/Actions/authActions'
import { avatarPlaceholder } from 'state/Redux/constants'
import { classNames } from 'utils/classNames'
import useAccountType from 'hooks/useAccountType'

const UniversalHeader = ({ userData }: { userData: IParent }) => {
  const history = useHistory()
  const dispatch = useDispatch()

  const { setPageState, setIsSearched, pageState } = useHeaderContext()

  const pathname = window.location.pathname

  const checkIfIncludes = (term: string) => pathname.includes(term)
  const atJobs = filter(links.projectTerms, checkIfIncludes).length > 0
  const atProducts = filter(links.productTerms, checkIfIncludes).length > 0

  useEffect(() => {
    if (atJobs) {
      setPageState('jobs')
    } else if (atProducts) {
      setPageState('products')
    }
  }, [pathname, atJobs, atProducts])

  const userNavigation = [
    {
      name: 'Your Profile',
      href: '#',
      textClass: '',
      onClick: () =>
        history.push(
          links.getProfileById(
            userData?.profileUrl,
            userData?.other?.template || 1
          )
        ),
    },
    {
      // eslint-disable-next-line quotes
      name: "Friend's Purchases",
      href: '#',
      textClass: '',
      onClick: () => history.push(links.friendsPurchases()),
    },
    {
      name: 'Settings',
      href: '#',
      textClass: '',
      onClick: () => history.push(links.SETTINGS),
    },
    {
      name: 'Sign out',
      href: '#',
      textClass: 'text-red-500',
      onClick: () => dispatch(logOut(history)),
    },
  ]

  const parsed = queryString.parse(window.location.search)

  const searchedQuery = parsed?.q?.toString()

  const [searchText, setSearchText] = useState(searchedQuery)

  const onKeyDown = (e: { key: string }) => {
    if (e.key === 'Enter' && searchText.length >= 3) {
      setTimeout(() => {
        setIsSearched(true)
        history.push(links.searchJobs(searchText))
      }, 30)
    }
  }

  const { isBusiness } = useAccountType(userData)

  const navigation = [
    { name: 'Home', href: links.DASHBAORD, current: false },
    { name: 'My Network', href: '#', current: false },
    { name: 'Notifications', href: '#', current: false },
    { name: 'Sell', href: '#', current: false },
    { name: 'My 13RMS', href: '#', current: false },
    isBusiness && { name: 'Business Apps', href: '#', current: false },
    isBusiness && {
      name: 'Products',
      href: links.BROWSE_PRODUCTS(userData.profileUrl),
      current: atProducts,
    },
    isBusiness && {
      name: 'Projects',
      href: links.viewMyProjects(),
      current: atJobs,
    },
    !isBusiness && { name: 'Jobs', href: links.exploreJobs(), current: atJobs },
  ].filter(Boolean)

  const dynamicPlaceholder =
    pageState === 'jobs' ? 'Search Jobs' : 'Search Products'

  return (
    <Disclosure as="header" className="bg-gray-800">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:divide-y lg:divide-gray-700 lg:px-8">
            <div className="relative h-16 flex justify-between">
              <div className="relative z-10 px-2 flex lg:px-0">
                <div className="flex-shrink-0 flex items-center">
                  <img
                    className="block h-10 w-auto"
                    src={process.env.PUBLIC_URL + '/logo.png'}
                    alt="Workflow"
                  />
                </div>
              </div>
              <div className="relative z-0 flex-1 px-2 flex items-center justify-center sm:absolute sm:inset-0">
                <div className="w-full sm:max-w-xs">
                  <label htmlFor="search" className="sr-only">
                    Search
                  </label>
                  <div className="relative">
                    <div className="pointer-events-none absolute inset-y-0 left-0 pl-3 flex items-center">
                      <SearchIcon
                        className="h-5 w-5 text-gray-400"
                        aria-hidden="true"
                      />
                    </div>
                    <input
                      id="search"
                      name="search"
                      className="block w-full bg-gray-700 border border-transparent rounded-md py-2 pl-10 pr-3 text-sm placeholder-gray-400 focus:outline-none focus:bg-white focus:border-white focus:ring-white focus:text-gray-900 text-white focus:placeholder-gray-500 sm:text-sm"
                      placeholder={dynamicPlaceholder}
                      value={searchText}
                      type="search"
                      onKeyDown={onKeyDown}
                      onChange={(e) => setSearchText(e.target.value)}
                    />
                  </div>
                </div>
              </div>
              <div className="relative z-10 flex items-center lg:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="hidden lg:relative lg:z-10 lg:ml-4  lg:flex lg:items-center">
                <button
                  onClick={() => history.push(links.cart)}
                  type="button"
                  className="bg-gray-800 flex-shrink-0 rounded-full p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                >
                  <span className="sr-only">Basket</span>
                  <BsBag className="h-6 w-6" aria-hidden="true" />
                </button>
                <button
                  type="button"
                  className="bg-gray-800 ml-2 flex-shrink-0 rounded-full p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                >
                  <span className="sr-only">View notifications</span>
                  <BellIcon className="h-6 w-6" aria-hidden="true" />
                </button>

                {/* Profile dropdown */}
                <Menu as="div" className="flex-shrink-0 relative ml-4">
                  <div>
                    <Menu.Button className="bg-gray-800 rounded-full flex text-sm text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                      <span className="sr-only">Open user menu</span>
                      <img
                        className="h-8 w-8 rounded-full"
                        src={
                          userData?.profilePicture
                            ? userData?.profilePicture
                            : avatarPlaceholder
                        }
                        alt=""
                      />
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5 py-1 focus:outline-none">
                      {userNavigation.map((item) => (
                        <Menu.Item key={item.name}>
                          {({ active }) => (
                            <button
                              onClick={() => item.onClick()}
                              className={classNames(
                                item.textClass ||
                                  'dark:text-white text-gray-700',
                                active
                                  ? 'bg-gray-100 dark:bg-gray-700'
                                  : 'dark:bg-gray-800',
                                'flex items-start font-medium w-full py-2 px-4 text-sm '
                              )}
                            >
                              {item.name}
                            </button>
                          )}
                        </Menu.Item>
                      ))}
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
            <nav
              className="hidden lg:py-2 lg:flex lg:space-x-8"
              aria-label="Global"
            >
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={classNames(
                    item.current
                      ? 'text-white via-red-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 bg-gradient-to-br from-yellow-500 to-pink-500'
                      : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'rounded-md py-2 px-3 inline-flex items-center text-sm font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </a>
              ))}
            </nav>
          </div>

          <Disclosure.Panel as="nav" className="lg:hidden" aria-label="Global">
            <div className="pt-2 pb-3 px-2 space-y-1">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={classNames(
                    item.current
                      ? 'bg-gray-900 text-white'
                      : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block rounded-md py-2 px-3 text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </a>
              ))}
            </div>
            <div className="border-t border-gray-700 pt-4 pb-3">
              <div className="px-4 flex items-center">
                <div className="flex-shrink-0">
                  <img
                    className="h-10 w-10 rounded-full"
                    src={
                      userData?.profilePicture
                        ? userData?.profilePicture
                        : avatarPlaceholder
                    }
                    alt=""
                  />
                </div>
                <div className="ml-3">
                  <div className="text-base font-medium text-white">
                    {userData.fullName}
                  </div>
                  <div className="text-sm font-medium text-gray-400">
                    {userData.email}
                  </div>
                </div>
                <button
                  type="button"
                  className="ml-auto flex-shrink-0 bg-gray-800 rounded-full p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                >
                  <span className="sr-only">View notifications</span>
                  <BellIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
              <div className="mt-3 px-2 space-y-1">
                {userNavigation.map((item) => (
                  <button
                    key={item.name}
                    className="block rounded-md py-2 px-3 text-base font-medium text-gray-400  hover:bg-gray-700 hover:text-white"
                  >
                    {item.name}
                  </button>
                ))}
              </div>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}

export default UniversalHeader
