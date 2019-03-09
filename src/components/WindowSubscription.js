import raf from 'raf'
import React from 'react'

const WindowSubscriptionsContext = React.createContext({
  subscribe: () => {
    /* */
  },
  unsubscribe: () => {
    /* */
  },
})

const events = [
  'resize',
  'scroll',
  'touchstart',
  'touchmove',
  'touchend',
  'pageshow',
  'load',
]

export class WindowSubscriptionsProvider extends React.Component {
  rafHandle = undefined
  framePending = false
  subscribers = []

  subscribe = handler => {
    this.subscribers = [...this.subscribers, handler]
  }

  unsubscribe = handler => {
    this.subscribers = this.subscribers.filter(current => current !== handler)
  }

  notifySubscribers = () => {
    if (this.framePending === false) {
      this.rafHandle = raf(() => {
        this.framePending = false

        this.subscribers.forEach(handler => handler())
      })

      this.framePending = true
    }
  }

  componentDidMount() {
    events.forEach(event =>
      window.addEventListener(event, this.notifySubscribers)
    )
  }

  componentWillUnmount() {
    if (this.rafHandle) {
      raf.cancel(this.rafHandle)

      this.rafHandle = undefined
    }

    events.forEach(event =>
      window.removeEventListener(event, this.notifySubscribers)
    )
  }

  render() {
    const value = {
      subscribe: this.subscribe,
      unsubscribe: this.unsubscribe,
    }

    return (
      <WindowSubscriptionsContext.Provider value={value}>
        {this.props.children}
      </WindowSubscriptionsContext.Provider>
    )
  }
}

export { WindowSubscriptionsContext }
