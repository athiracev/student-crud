
import './App.css'
import './bootstrap.min.css'
import {Routes,Route} from 'react-router-dom'
import LoginTeacher from './components/LoginTeacher'
import ViewStudent from './components/ViewStudent'
import { ToastContainer } from 'react-toastify'

function App() {

  return (
    <>
<Routes>
  <Route path='/' Component={LoginTeacher}/>
  <Route path='/dashboard' Component={ViewStudent}/>
</Routes>
    
    
    <ToastContainer/>
    </>
  )
}

export default App
