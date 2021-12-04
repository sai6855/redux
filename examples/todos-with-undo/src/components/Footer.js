import React from 'react'
import useSelector from '../Hooks/useSelector'
import useUpdatePathState from '../Hooks/useUpdatePathState'
import Link from './Link'

const Footer = () => {
  const type = useSelector(['type'])

  const dispatch = useUpdatePathState()

  const filterTodos = userType => {
    dispatch(() => userType, ['type'])
  }

  return (
    <p>
      Show:{' '}
      <Link onClick={() => filterTodos('all')} active={type === 'all'}>
        All
      </Link>
      {', '}
      <Link onClick={() => filterTodos('active')} active={type === 'active'}>
        Active
      </Link>
      {', '}
      <Link
        onClick={() => filterTodos('completed')}
        active={type === 'completed'}
      >
        Completed
      </Link>
    </p>
  )
}

export default Footer
