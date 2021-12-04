import React from 'react'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'
import UndoRedo from '../containers/UndoRedo'
import Provider from '../Hooks/Provider'

const App = () => (
  <Provider store={{ todos: [], type: 'all' }}>
    <div>
      <AddTodo />
      <VisibleTodoList />
      <Footer />
      <UndoRedo />
    </div>
  </Provider>
)

export default App
