import React, { useEffect } from 'react'
import { Link,  Route, Routes, useNavigate } from 'react-router-dom'
import Home from './pages/Home'
import Login from "./pages/Login"
import Register from './pages/Register'
import Post from './pages/Post'
export default function App() {
  const navigate = useNavigate()
  const url = window.location.pathname
  // ! if user is not go to login or register
  useEffect(() => {
    const isLogin = Boolean(JSON.parse(localStorage?.getItem("isLogin"))) || false
    if (!isLogin) {
      if (url == "/login") {
        navigate("/login")
      } else if (url == "/register") {
        navigate("/register")
      } else {
        navigate("/login")
      }
    } else if (isLogin) {
      if (url == "/login") {
        navigate("/home")
      }
      if (url == "/register") {
        navigate("/home")
      }
    }
    console.log(isLogin)
  }, [])
  const nav = ["home", "posts"]
  const handleLogout = () => {
    location.reload()
    localStorage.setItem("isLogin", JSON.stringify(false))
  }
  return (
    <div>
      {Boolean(JSON.parse(localStorage?.getItem("isLogin"))) && (<div className='px-2 max-w-[1200px] mx-auto'>
        <div className='flex justify-between bg-gray-500 rounded-b-md text-white px-2'>
          <div className='flex gap-2'>
            {nav?.map((el) => (
              <Link key={el} to={"/" + el}>
                <div >{el}</div>
              </Link>
            ))}
          </div>
          <span onClick={() => handleLogout()} className='cursor-pointer font-bold'>logout</span>
        </div>
      </div>)}
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/posts' element={<Post />} />
        <Route path='/login' element={
          <Login />
        } />
        <Route path='/register' element={<Register />} />
        <Route path='*' element={<div>404</div>} />
      </Routes>
    </div>
  )
}
