import { useEffect, useState } from 'react'

// Hook
function useLink(href: string, rel: string = 'stylesheet'): string {
  // Keep track of script status ("idle", "loading", "ready", "error")
  const [status, setStatus] = useState(href ? 'loading' : 'idle')
  useEffect(
    () => {
      // Allow falsy src value if waiting on other data needed for
      // constructing the script URL passed to this hook.
      if (!href) {
        setStatus('idle')
        return
      }
      // Fetch existing script element by src
      // It may have been added by another intance of this hook
      let link = document.querySelector(`link[href="${href}"]`)
      if (!link) {
        // Create script
        link = document.createElement('link')
        // @ts-ignore
        link.href = href
        // @ts-ignore
        link.rel = rel

        // Add script to document body
        document.head.appendChild(link)
      } else {
        // Grab existing script status from attribute and set to state.
        setStatus(link.getAttribute('data-status'))
      }
      // Script event handler to update status in state
      // Note: Even if the script already exists we still need to add
      // event handlers to update the state for *this* hook instance.
      const setStateFromEvent = (event: { type: string }) => {
        setStatus(event.type === 'load' ? 'ready' : 'error')
      }

      // Remove event listeners on cleanup
      return () => {
        if (link) {
          link.removeEventListener('load', setStateFromEvent)
          link.removeEventListener('error', setStateFromEvent)
        }
      }
    },
    [href] // Only re-run effect if script src changes
  )
  return status
}

export default useLink
