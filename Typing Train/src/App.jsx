import './App.css'
import Layout from './Layout'
import About from './pages/About'
import Home from './pages/Home'
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />}></Route>
      <Route path='about' element={<About />}></Route>
    </Route>
  )
)

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
