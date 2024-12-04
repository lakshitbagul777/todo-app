import { useState } from 'react'
import { CreateTodo } from './components/CreateTodo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <CreateTodo/>
    </div>
  )
}

export default App
