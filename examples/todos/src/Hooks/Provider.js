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

      const setPathState = (statepaths, pathState) => {
        return statepaths.reduce((acc, path) => {
          const [_, ...rest] = statepaths

          return {
            ...acc,
            [path]:
              path === paths[paths.length - 1]
                ? newState
                : setPathState(rest, { ...acc[path] })
          }
        }, pathState)
      }

      // const paths = ['key1', 'key2', 'key3']

      //  {...prevState,[key1]:{...prevState[key1],key2:{...prevState[key1][key2],key3:value}}}

      return paths.length > 0 ? setPathState(paths, prevState) : newState
    })
  }

  console.log(state)

  return (
    <Context.Provider value={{ state, setState }}>{children}</Context.Provider>
  )
}

export default Provider
