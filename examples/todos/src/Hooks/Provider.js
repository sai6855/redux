// eslint-disable-next-line no-use-before-define
import React, { useState } from 'react'

export const Context = React.createContext()

const Provider = ({ store = {}, children }) => {
  const [state, change] = useState(store)

  const setState = (callback, paths = []) => {
    change(prevState => {
      const newState = callback(
        prevState,
        [...paths].reduce((acc, path) => acc[path], prevState)
      )

      if (typeof newState === 'function') {
        newState(setState)
        return prevState
      }

      let obj = {}
      if (paths.length > 0) {
        obj = { ...prevState }
        paths.reduce((acc, path) => {
          if (path === paths[paths.length - 1]) {
            acc[path] = newState
          }
          return acc[path]
        }, obj)
      }
      return paths.length > 0 ? obj : newState
    })
  }

  console.log(state)

  return (
    <Context.Provider value={{ state, setState }}>{children}</Context.Provider>
  )
}

export default Provider
