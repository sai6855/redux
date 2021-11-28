// eslint-disable-next-line no-use-before-define
import React from 'react'
import { useState } from 'react'
import TodoList from '../components/TodoList'
import useUpdatePathState from '../Hooks/useUpdatePathState'
import useSelector from '../Hooks/useSelector'
import { addTodo } from './thunks'

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
              dispatchPath(() => addTodo(todos))
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
