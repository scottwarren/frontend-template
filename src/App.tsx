import './App.css'

import { SystemTime } from './components/SystemTime'

function App() {
  return (
    <div>
      <h1 className='text-3xl font-bold underline text-center'>Hello world</h1>
      <p>
        the time is: <SystemTime />
      </p>
    </div>
  )
}

export default App
