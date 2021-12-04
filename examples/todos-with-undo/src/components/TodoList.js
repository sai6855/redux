import React from 'react'
import Todo from './Todo'
import useSelector from '../Hooks/useSelector'
import useUpdatePathState from '../Hooks/useUpdatePathState'

const TodoList = () => {
  const todos = useSelector(['todos'])
  const type = useSelector(['type'])
  const dispatch = useUpdatePathState()

  return (
    <ul>
      {todos
        .filter(todo =>
          type === 'all'
            ? true
            : type === 'completed'
            ? todo.completed
            : !todo.completed
        )
        .map(stodo => (
          <Todo
            key={stodo.id}
            {...stodo}
            onClick={() => {
              dispatch(
                () =>
                  todos.map(todo =>
                    todo.id === stodo.id
                      ? { ...todo, completed: !todo.completed }
                      : todo
                  ),
                ['todos']
              )
            }}
          />
        ))}
    </ul>
  )
}

export default TodoList
