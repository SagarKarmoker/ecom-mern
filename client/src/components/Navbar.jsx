import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from "../providers/AuthProvider"
import { Link, NavLink } from 'react-router-dom'
import { MdLightMode } from "react-icons/md";
import { CiLight } from "react-icons/ci";

export default function Navbar() {
  const { user, loading, logout } = useContext(AuthContext)
  console.log(user)
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');

    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.setAttribute('data-theme', savedTheme);
    } else {
      document.documentElement.setAttribute('data-theme', 'light');
    }
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  };

  return (
    <div className="navbar bg-base-100 pt-5 px-4 lg:px-0">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
            <li><NavLink to='/'>Home</NavLink></li>
            <li><NavLink to='/equipments'>All Sports Equipments</NavLink></li>
            {
              user && (
                <>
                  <li><NavLink to='/add-equipment'>Add Equipment</NavLink></li>
                  <li><NavLink to='/my-equipments'>My Equipments</NavLink></li>
                </>
              )
            }
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">EquiSports</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li><NavLink to='/'>Home</NavLink></li>
          <li><NavLink to='/equipments'>All Sports Equipments</NavLink></li>
          {
            user && (
              <>
                <li><NavLink to='/add-equipment'>Add Equipment</NavLink></li>
                <li><NavLink to='/my-equipments'>My Equipments</NavLink></li>
              </>
            )
          }
        </ul>
      </div>

      <div className='navbar-end gap-x-4'>
        <div>
          <button onClick={toggleTheme} className="btn btn-ghost text-2xl">
            {theme !== 'light' ? <CiLight /> : <MdLightMode />}
          </button>
        </div>
        {
          user ? (
            <div className='flex justify-center space-x-4 items-center'>
              <div className="avatar tooltip" data-tip={`${user.displayName}`}>
                <div className="ring-primary ring-offset-base-100 w-8 rounded-full ring ring-offset-2">
                  <img src={`${user.photoURL}`} />
                </div>
              </div>
              <button className="btn" onClick={() => logout()} >Logout</button>
            </div>
          ) : (
            <div className="space-x-4 flex">
              <Link to="/login" className="btn">Login</Link>
              <div className='hidden lg:block'>
                <Link to="/register" className="btn">Register</Link>
              </div>
            </div>
          )
        }
      </div>
    </div>
  )
}
