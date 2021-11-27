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
      return newState
    })
  }

  return (
    <Context.Provider value={{ state, setState }}>{children}</Context.Provider>
  )
}

export default Provider
