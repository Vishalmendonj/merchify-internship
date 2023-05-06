import React from 'react'
import Introduction from './Components/Introduction'
import Quiz from './Components/Quiz'
import { Route, Routes } from 'react-router-dom'


const App = () => {
  return (
    <div>
      
      <Routes>
        <Route path='/' element={<Introduction/>}/>
        <Route path='/quiz' element={<Quiz/>}/>
      </Routes>
    </div>
  )
}

export default App
