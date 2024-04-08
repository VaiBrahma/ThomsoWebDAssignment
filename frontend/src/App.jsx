import React from 'react'
import Home from './pages/Home/Home'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Booking from './pages/Booking/Booking';

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      
      <Route path="" element={''}>
        <Route path="/" element={<Home/>} />
        <Route path='/*' element={<Booking/>}/>
      </Route>
    )
    );
  return <RouterProvider router = {router}/>;
}

export default App