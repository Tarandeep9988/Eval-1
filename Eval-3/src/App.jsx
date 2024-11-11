import './App.css'
import Layout from './Layout'
import AboutUs from './components/AboutUs/AboutUs'
import ContactUs from './components/ContactUs/ContactUs'
import Home from './components/Home/Home'
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />}></Route>
      <Route path='aboutUs' element={<AboutUs />}></Route>
      <Route path='contactUs' element={<ContactUs />}></Route>
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
