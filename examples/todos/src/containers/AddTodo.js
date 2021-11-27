import React from 'react'
import { useState } from 'react'
import TodoList from '../components/TodoList'
import useDispatch from '../Hooks/useDispatch'

const AddTodo = () => {
  let [input, setInput] = useState('')
  let [test, setTest] = useState('')

  const dispatch = useDispatch()

  return (
    <>
      <div>
        <form
          onSubmit={e => {
            e.preventDefault()
            if (input) {
              dispatch(
                (prevStore, prevState) => [
                  ...prevState,
                  {
                    id: prevState.length,
                    text: input,
                    completed: false
                  }
                ],
                ['home', 'todos']
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
                ['home', 'tests']
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
