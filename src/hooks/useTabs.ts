import { ITab } from 'components/Tabs'
import { useState } from 'react'

const useTabs = (tabs: ITab[]) => {
  const initCurrentTab = tabs[0].name
  const [currentTab, setCurrentTab] = useState(initCurrentTab)

  const helpers = tabs.map((tab) => tab.name === currentTab)

  return { currentTab, setCurrentTab, helpers }
}

export default useTabs
