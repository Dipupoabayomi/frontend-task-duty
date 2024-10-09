
import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './pages/home/Home'
import MyTask from './pages/mytask/MyTask'
import EditTask from './pages/edittask/EditTask'
import NewTask from './pages/newtask/NewTask'
import Rootlayouts from './Layouts/Rootlayouts'

function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route element={<Rootlayouts/>}>
    <Route path='/' element={<Home />}/>
    <Route path='/mytask' element={<MyTask/>}/>
    <Route path='/edittask/:_id' element={<EditTask/>}/>
    <Route path='/newtask' element={<NewTask/>}/>
    </Route>
   </Routes>
   </BrowserRouter>
 
  )
}

export default App
