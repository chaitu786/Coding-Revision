import React from 'react'
import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <div>
        <Link to="/">Dashboard</Link>
        <Link to="/todo">Todos</Link>
    </div>
  )
}

export default Navbar