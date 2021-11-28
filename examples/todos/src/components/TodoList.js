// eslint-disable-next-line no-use-before-define
import React from 'react'
import useDispatch from '../Hooks/useDispatch'
import useSelector from '../Hooks/useSelector'

import Todo from './Todo'

const TodoList = () => {
  const todos = useSelector(['app', 'home', 'todos'])
  const tests = useSelector(['app', 'home', 'tests'])

  const dispatch = useDispatch()

  const toggleTodo = id => {
    dispatch(state => ({
      ...state,
      app: {
        ...state.app,
        home: {
          ...state.app.home,
          todos: state.app.home.todos.map(todo =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
          )
        }
      }
    }))
  }

  return (
    <>
      <ul>
        todos
        {todos.map(todo => (
          <Todo key={todo.id} {...todo} onClick={() => toggleTodo(todo.id)} />
        ))}
      </ul>
      <ul>
        tests
        {tests.map(todo => (
          <Todo key={todo.id} {...todo} onClick={() => toggleTodo(todo.id)} />
        ))}
      </ul>
    </>
  )
}

export default TodoList
