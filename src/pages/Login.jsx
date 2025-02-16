import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function Login() {
  const [name, setName] = useState("")
  const [gmail, setGmail] = useState("")
  const [password, setPassword] = useState("")
  const [direct, setDirect] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    if (direct) {
      navigate("/login")
    }
  }, [gmail, direct])

  const handleRegister = () => {
    const users = JSON?.parse(localStorage.getItem("users"))
    const findUser = users.filter((i) => {
      if (i?.gmail == gmail && i?.password == password) {
        localStorage.setItem("isLogin", true)
      }
    })
    console.log(findUser)
  }

  return (
    <div className='flex flex-col justify-center items-center h-screen'>
      <div className='max-w-60 flex flex-col gap-2'>
        <div className='flex gap-2'>
          <Link
            className='border-2 hover:bg-gray-500 hover:text-white border-gray-500 rounded-sm p-2 font-bold w-full'
            to={"/register"}>
            <h2 >Register</h2>
          </Link>
          <Link
            className='border-2 hover:bg-gray-500 hover:text-white border-gray-500 rounded-sm p-2 font-bold w-full'
            to={"/login"}>
            <h2 >login</h2>
          </Link>
        </div>
        <div className='border-2 border-gray-500 rounded-sm p-2'>
          <h2 className='font-bold'>login</h2>

          <form className=' flex flex-col'>

            <label
              className='py-2 pb-0'
              htmlFor="g1">gmail</label>
            <input
              name='g1'
              type='gmail'
              className={`${!gmail.includes("@gmail.com") && "border-red-500"} border-1  border-gray-500 rounded-sm px-4 py-2`}
              placeholder='Enter gmail'
              value={gmail}
              onChange={(e) => setGmail(e.target.value)}
            />
            <p className='text-red-500'>{!gmail.includes("@gmail.com") && "missing @gmail.com"}</p>
            <label
              className='py-2 pb-0'
              htmlFor="p1">password</label>
            <input
              name='p1'
              type='password'
              className='border-1  border-gray-500 rounded-sm px-4 py-2'
              placeholder='Enter password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <button
              type='submit'
              onClick={() => handleRegister()}
              className='border-1 mt-4 border-gray-500 rounded-sm px-4 py-2 hover:bg-black hover:text-white transition-all cursor-pointer '
            >login</button>
          </form>
        </div>
      </div>

    </div >
  )
}
