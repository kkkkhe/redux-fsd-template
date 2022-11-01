import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { listModel } from './entities/todo'
import { useAction, useAppSelector } from './shared/lib/redux-std'


function App() {
  const fetchUser = useAction(listModel.actions.userLoading)
  const isLoading = useAppSelector(listModel.selectors.isUsersLoading)
  console.log(isLoading, ' Selector')
  return (
    <div>
      <button onClick={() => fetchUser(1)}>USER 1</button>
      <button onClick={() => fetchUser(2)}>USER 2</button>
      <button onClick={() => fetchUser(3)}>USER 3</button>
      <button onClick={() => fetchUser(4)}>USER 4</button>
    </div>
  )
}

export default App
