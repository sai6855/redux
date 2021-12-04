import { useContext } from 'react'
import { Context } from './Provider'

const useUpdatePathState = () => {
  const { updatePathState } = useContext(Context)

  return updatePathState
}

export default useUpdatePathState
