import React from 'react'
import useDispatch from '../Hooks/useDispatch'
import useSelector from '../Hooks/useSelector'

import Todo from './Todo'

const TodoList = () => {
  const todos = useSelector(['home', 'todos'])

  const dispatch = useDispatch()

  const toggleTodo = id => {
    dispatch(state => ({
      ...state,
      todos: state.todos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    }))
  }

  return (
    <ul>
      {todos.map(todo => (
        <Todo key={todo.id} {...todo} onClick={() => toggleTodo(todo.id)} />
      ))}
    </ul>
  )
}

export default TodoList
