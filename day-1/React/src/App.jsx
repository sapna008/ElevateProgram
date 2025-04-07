import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './components/Counter'
import FetchApi from './components/FetchApi'
import UseRefForm from './components/UseRefForm'

function App() {
  const [count, setCount] = useState(0)

  return (
<div>
  <h1>All three Questions Implementation</h1>
  <hr />
  {/* q1 */}
  <Counter/>
  <hr />

  {/* q2 */}
  <FetchApi/>
  <hr />

  {/* q3 */}
  <UseRefForm/>
</div>
  )
}

export default App
