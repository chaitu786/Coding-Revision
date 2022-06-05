import React from 'react'
import Navbar from '../Components/Navbar'
import { Route,Routes } from 'react-router-dom'
import Dashboard from '../Components/Dashboard'
import Todo from '../Components/Todo'
import More from '../Components/More'
import Edit from '../Components/Edit'

const MainRoutes = () => {
  return (
    <div>
        <Navbar/>
        <Routes>
            <Route path='/' element={<Dashboard/>}>Dashboard</Route>
            <Route path='/todo' element={<Todo/>}>Todo</Route>
            <Route path='/todo/:id' element={<More/>}>Todo</Route>
            <Route path='/todo/:id/edit' element={<Edit/>}>Todo</Route>
        </Routes>
    </div>
  )
}

export default MainRoutes