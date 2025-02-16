import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  const [data, setData] = useState([])
  useEffect(() => {
    const posts = JSON.parse(localStorage.getItem("posts")) || []
    setData(posts)
  }, [])
  // console.log(data[0]?.title)
  return (
    <div className='max-w-[1200px] mx-auto px-2 my-2'>
      <div className='border-2 px-2 border-gray-500 pb-2'>
        {data?.map((el, index) => (
          <div key={index} className='border-b-2 border-black py-2'>
            <div className='flex gap-2'>
              <h2 className='font-bold'>title</h2>
              <p>{el?.title}</p>
            </div>
            <div className='flex gap-2'>
              <h2 className='font-bold'>description</h2>
              <p>{el?.description}</p>
            </div>
            
            <div className='flex gap-2'>
              <h2 className='font-bold'>is Visible</h2>
              <p>{JSON.stringify(el?.isVisible)}</p>
            </div>
          </div>
        ))}
        {data.length == 0 && "no post"}
      </div>
    </div>
  )
}
