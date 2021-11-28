// eslint-disable-next-line no-use-before-define
import React, { useState } from 'react'

export const Context = React.createContext()
class ListNode {
  constructor(data) {
    this.data = data
    this.next = null
  }
}

// class LinkedList {
//   constructor(head = null) {
//     this.head = head
//   }
// }

// let node1 = new ListNode(2)
// let node2 = new ListNode(5)
// node1.next = node2

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

    //   let obj = { ...prevState }

    //   const nodes = []

    //   paths.forEach(path => {
    //     const statePath = obj[path]

    //     const node = new ListNode({ ...obj, ...statePath })
    //     nodes.push(node)
    //     obj = { ...statePath }
    //   })

    //   console.log(nodes)

      //   let obj = { ...prevState }

      //   console.log(

      //     const val = (path,state) => {
      //         if(path === paths[paths.length - 1]){
      //             return {...state,[path]:newState}
      //         }else return {...state,[path]:val()}
      //     }

      //     paths.forEach(path => {
      //       obj = { ...obj, [path]: obj[path] }
      //     })
      //   )

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
