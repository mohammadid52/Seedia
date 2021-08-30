import { classNames } from 'utils/classNames'

const Tabs = ({
  tabs,
  currentTab,
  setCurrentTab,
}: {
  tabs: { name: string; count: number }[]
  currentTab: string
  setCurrentTab: React.Dispatch<React.SetStateAction<string>>
}) => {
  return (
    <div>
      <div className="sm:hidden">
        <label htmlFor="tabs" className="sr-only">
          Select a tab
        </label>
        <select
          id="tabs"
          name="tabs"
          className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-pink-500 sm:text-sm rounded-md"
          //@ts-ignore
          defaultValue={tabs.find((tab) => tab?.current)?.name}
        >
          {tabs.map((tab) => (
            <option key={tab?.name}>{tab?.name}</option>
          ))}
        </select>
      </div>
      <div className="hidden sm:block">
        <div className="border-b border-gray-200 dark:border-gray-600">
          <nav className="-mb-px flex space-x-8" aria-label="Tabs">
            {tabs.map((tab) => (
              <div
                key={tab.name}
                onClick={() => setCurrentTab(tab.name)}
                className={classNames(
                  tab.name === currentTab
                    ? 'border-pink-500 text-pink-600'
                    : 'border-transparent text-gray-400  ',
                  'whitespace-nowrap cursor-pointer flex py-4 px-1 border-b-2 font-medium text-sm'
                )}
                aria-current={tab.name === currentTab ? 'page' : undefined}
              >
                {tab.name}
                {tab.count ? (
                  <span
                    className={classNames(
                      tab.name === currentTab
                        ? 'bg-pink-100 text-pink-600'
                        : 'bg-gray-100 text-gray-900',
                      'hidden ml-3 py-0.5 px-2.5 rounded-full text-xs font-medium md:inline-block'
                    )}
                  >
                    {tab.count}
                  </span>
                ) : null}
              </div>
            ))}
          </nav>
        </div>
      </div>
    </div>
  )
}
export default Tabs
