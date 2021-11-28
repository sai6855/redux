// eslint-disable-next-line no-use-before-define
import React from 'react'
import { useState } from 'react'
import TodoList from '../components/TodoList'
import useDispatch from '../Hooks/useDispatch'
import useSelector from '../Hooks/useSelector'

const AddTodo = () => {
  let [input, setInput] = useState('')
  let [test, setTest] = useState('')

  const dispatch = useDispatch()

  const todos = useSelector(['app', 'home', 'todos'])

  return (
    <>
      <div>
        <form
          onSubmit={async e => {
            e.preventDefault()

            const response = await fetch(
              `https://jsonplaceholder.typicode.com/todos/${todos.length + 1}`
            )
            const data = await response.json()

            if (input) {
              dispatch(
                (prevStore, prevState) => [
                  ...prevState,
                  {
                    id: prevState.length,
                    text: data.title,
                    completed: false
                  }
                ],
                ['app', 'home', 'todos']
              )
            }
            if (test) {
              dispatch(
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
