import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { todoModel } from './entities/todo'
import { Input } from './shared/ui/input'


function App() {
  const dispatch = useDispatch()
  console.log(todoModel.actions.changeValue)
  return (
    <div>
      <button></button>
    </div>
  )
}

export default App
