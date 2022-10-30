import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { listModel } from './entities/todo'
import { useAction, useAppSelector } from './shared/lib/redux-std'


function App() {
  const fetchUser = useAction(listModel.actions.userLoading)
  const isLoading = useAppSelector(listModel.selectors.isUsersLoading)
  console.log(isLoading, ' Selector')
  useEffect(() => {
    fetchUser(1)
  }, [fetchUser])
  return (
    <div>
      <button></button>
    </div>
  )
}

export default App
