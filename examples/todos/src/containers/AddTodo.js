import React from 'react'
import { useState } from 'react'
import TodoList from '../components/TodoList'
import useDispatch from '../Hooks/useDispatch'

const AddTodo = () => {
  let [input, setInput] = useState()

  const dispatch = useDispatch()

  return (
    <>
      <div>
        <form
          onSubmit={e => {
            e.preventDefault()

            dispatch(prevState => ({
              ...prevState,
              todos: [
                ...prevState.todos,
                {
                  id: prevState.todos.length,
                  text: input,
                  completed: false
                }
              ]
            }))
          }}
        >
          <input onChange={e => setInput(e.target.value)} />
          <button type="submit">Add Todo</button>
        </form>
      </div>
      <TodoList />
    </>
  )
}

export default AddTodo
