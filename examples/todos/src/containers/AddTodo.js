// eslint-disable-next-line no-use-before-define
import React from 'react'
import { useState } from 'react'
import TodoList from '../components/TodoList'
import useUpdatePathState from '../Hooks/useUpdatePathState'
import useSelector from '../Hooks/useSelector'

const AddTodo = () => {
  let [input, setInput] = useState('')
  let [test, setTest] = useState('')

  const dispatchPath = useUpdatePathState()

  const todos = useSelector(['app', 'home', 'todos'])

  return (
    <>
      <div>
        <form
          onSubmit={e => {
            e.preventDefault()

            if (input) {
              dispatchPath(() => async asyncDispatchPath => {
                const response = await fetch(
                  `https://jsonplaceholder.typicode.com/todos/${
                    todos.length + 1
                  }`
                )
                const data = await response.json()
                asyncDispatchPath(
                  (prevStore, prevState) => {
                    return [
                      ...prevState,
                      {
                        id: prevState.length,
                        text: data.title,
                        completed: false
                      }
                    ]
                  },
                  ['app', 'home', 'todos']
                )
              })
            }
            if (test) {
              dispatchPath(
                (prevStore, prevState) => [
                  ...prevState,
                  {
                    id: prevState.length,
                    text: test,
                    completed: false
                  }
                ],
                ['app', 'home', 'tests']
              )
            }
            setInput('')
            setTest('')
          }}
        >
          <input value={input} onChange={e => setInput(e.target.value)} />
          <input value={test} onChange={e => setTest(e.target.value)} />
          <button type="submit">Add Todo</button>
        </form>
      </div>
      <TodoList />
    </>
  )
}

export default AddTodo
