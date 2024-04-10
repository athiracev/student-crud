
import './App.css'
import './bootstrap.min.css'
import { Routes, Route } from 'react-router-dom'
import LoginTeacher from './components/LoginTeacher'
import ViewStudent from './components/ViewStudent'
import { ToastContainer } from 'react-toastify'
import CreateStudent from './components/CreateStudent'
import StudentEdit from './components/StudentEdit'
import Header from './components/Header'
import Footer from './components/Footer'
import LandingPage from './components/LandingPage'

function App() {

  return (
    <>
    <Header/>
      <Routes>
        <Route path='/' Component={LandingPage} />
        <Route path='/login' Component={LoginTeacher} />
        <Route path='/dashboard' Component={ViewStudent} />
        <Route path='/dashboard/createstu' Component={CreateStudent} />
        {/* <Route path='/dashboard/editstu/:id' Component={StudentEdit} /> */}
        <Route path="/dashboard/editstu/:id" element={<StudentEdit/>} />

       
      </Routes>
      <Footer/>


      <ToastContainer />
    </>
  )
}

export default App
