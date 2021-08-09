import React from 'react'
import { map } from 'lodash'
const shortcuts = ['Experience', 'Skills', 'Awards', 'Education', 'Language']

const Shortcuts = () => {
  return (
    <div id="shortcuts">
      <ul className="space-y-6">
        {map(shortcuts, (shortcut) => (
          <li key={shortcut}>
            <a
              href={`#${shortcut.toLocaleLowerCase()}`}
              className="text-gray-600 dark:text-white cursor-pointer link-hover text-left"
            >
              {shortcut}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Shortcuts
