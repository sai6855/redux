import { useContext } from 'react'
import { Context } from './Provider'

const useSelector = (paths = []) => {
  const { state } = useContext(Context)

  return paths.length === 0
    ? state
    : [...paths].reduce((acc, path) => acc[path], state)
}

export default useSelector
