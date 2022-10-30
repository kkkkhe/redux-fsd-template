import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { listModel } from './entities/todo'
import { useAction, useAppSelector } from './shared/lib/redux-std'


function App() {
  const fetchList = useAction(listModel.actions.getList)
  const isLoading = useAppSelector(listModel.selectors.isUsersLoading)
  console.log(isLoading, ' Selector')
  useEffect(() => {
    fetchList()
  }, [fetchList])
  return (
    <div>
      <button></button>
    </div>
  )
}

export default App
