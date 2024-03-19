
import './App.css'
import './bootstrap.min.css'
import { Routes, Route } from 'react-router-dom'
import LoginTeacher from './components/LoginTeacher'
import ViewStudent from './components/ViewStudent'
import { ToastContainer } from 'react-toastify'
import CreateStudent from './components/CreateStudent'
import StudentEdit from './components/StudentEdit'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' Component={LoginTeacher} />
        <Route path='/dashboard' Component={ViewStudent} />
        <Route path='/dashboard/createstu' Component={CreateStudent} />
        <Route path='/dashboard/editstu/:id' Component={StudentEdit} />
      </Routes>


      <ToastContainer />
    </>
  )
}

export default App
