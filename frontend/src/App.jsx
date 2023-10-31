import React from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import { logo } from './assets'
import { Home, CreatePost } from './pages'

const App = () => {
  return (
    <BrowserRouter>
      <header className='w-full flex justify-between items-center bg-slate-50 sm:px-8 p-4 border-b'>
        <Link to="/">
          <img src={logo} alt="logo" className='w-28 object-contain'/>
        </Link>
        <Link to="/create" className='font-inter font-medium px-4 py-2'>
          Create
        </Link>
      </header>
      <main className='sm:p-8 px-4 py-8 w-full bg-[#eee] min-h-[calc(100vh-73px)]'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<CreatePost />} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App
