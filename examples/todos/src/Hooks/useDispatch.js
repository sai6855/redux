import { useContext } from 'react'
import { Context } from './Provider'

const useDispatch = () => {
  const { setState } = useContext(Context)

  return setState
}

export default useDispatch
