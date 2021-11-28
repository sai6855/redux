export const addTodo = todos => async dispatch => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${todos.length + 1}`
  )
  const data = await response.json()
  dispatch(
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
}
