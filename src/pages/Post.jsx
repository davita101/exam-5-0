import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function Post() {
    const [title, setTitle] = useState("test")
    const [description, setDescription] = useState("tests")
    const [isVisible, setIsVisible] = useState(true)

    const handlePost = (e) => {
        e.preventDefault()
        const posts = JSON.parse(localStorage.getItem("posts")) || []
        const post = {
            title: title || "test",
            description: description || "test",
            isVisible: isVisible || true
        }
        localStorage.setItem("posts", JSON.stringify([...posts, post]))
    }
    return (
        <div className='max-w-[1200px] mx-auto px-2 my-2'>
            <div className='border-2 px-2 border-gray-500 '>
                <form className='flex flex-col '>
                    <label
                        className='py-2 pb-0 font-bold'
                        htmlFor="title">title</label>
                    <input
                        name='title'
                        className='border-2 mb-4  border-gray-500 rounded-sm px-4 py-2'
                        placeholder='Enter title'
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                    <label
                        className='py-2 pb-0 font-bold'
                        htmlFor="description">description</label>
                    <textarea
                        name='description'
                        className='border-2 mb-4  border-gray-500 rounded-sm px-4 py-2'
                        placeholder='Enter description'
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                    <label htmlFor="visible" className='font-bold'>visible <span>({JSON.stringify(isVisible)})</span></label>
                    <select name="visible" id="visible" className='my-2 border-2 border-gray-500'>
                        <option value="true" onClick={() => setIsVisible(true)}>true</option>
                        <option value="false" onClick={() => setIsVisible(false)}>false</option>
                    </select>

                    <Link
                        className='border-2 mb-4 mt-4 border-gray-500 rounded-sm px-4 py-2 hover:bg-black hover:text-white transition-all cursor-pointer '
                        to="/home">
                        <button
                            type='submit'
                            onClick={(e) => handlePost(e)}

                        >post</button>
                    </Link>
                </form>

            </div>
        </div>
    )
}
