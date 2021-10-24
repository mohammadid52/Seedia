import { classNames } from 'utils/classNames'

export interface ITab {
  name: string
}

export interface TabsProps {
  tabs: ITab[]
  currentTab: string
  setCurrentTab: React.Dispatch<React.SetStateAction<string>>
}

const Tabs = ({ tabs, currentTab, setCurrentTab }: TabsProps) => {
  return (
    <div>
      <div className="sm:hidden">
        <label htmlFor="tabs" className="sr-only">
          Select a tab
        </label>

        <select
          id="tabs"
          name="tabs"
          className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
          defaultValue={tabs.find((tab) => tab.name === currentTab).name}
        >
          {tabs.map((tab) => (
            <option key={tab.name}>{tab.name}</option>
          ))}
        </select>
      </div>
      <div className="hidden sm:block">
        <div className="">
          <nav className="-mb-px flex space-x-8" aria-label="Tabs">
            {tabs.map((tab) => (
              <div
                tabIndex={0}
                key={tab.name}
                onClick={() => setCurrentTab(tab.name)}
                className={classNames(
                  currentTab === tab.name
                    ? ' gradient-text border-b-2 dark:border-pink-700 border-pink-200'
                    : 'dark:hover:text-pink-600 border-transparent border-b-2 text-gray-500 hover:text-gray-700 dark:hover:border-gray-600 hover:border-gray-300',
                  'whitespace-nowrap py-4 cursor-pointer px-1  font-medium text-sm'
                )}
              >
                {tab.name}
              </div>
            ))}
          </nav>
        </div>
      </div>
    </div>
  )
}
export default Tabs
