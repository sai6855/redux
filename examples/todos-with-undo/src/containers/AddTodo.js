import React, { useState } from 'react'
import useUpdatePathState from '../Hooks/useUpdatePathState'

let AddTodo = () => {
  let [input, setInput] = useState('')

  const dispatch = useUpdatePathState()
  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault()
          if (!input.trim()) {
            return
          }

          dispatch(
            store => [
              ...store.todos,
              {
                text: input,
                completed: false,
                id: store.todos.length
              }
            ],
            ['todos']
          )
          setInput('')
        }}
      >
        <input value={input} onChange={e => setInput(e.target.value)} />
        <button type="submit">Add Todo </button>
      </form>
    </div>
  )
}

export default AddTodo
