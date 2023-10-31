import React, { useState, useEffect } from 'react'
import { Loader, Card, FormField } from '../components'

const Home = () => {
  const [loading, setLoading] = useState(false)
  const [allPosts, setAllPosts] = useState(null)
  const [text, setText] = useState('Hello')

  return (
    <section className='max-w-7xl mx-auto'>
      <div>
        <h1 className='font-extrabold text-[32px]'>Text-to-Image</h1>
        <p className='mt-2 text-[gray] text-[20px] max-w-[500px]'>Here are some sample images generated</p>
      </div>
      
      <div className='mt-16'>
        <FormField></FormField>
      </div>

      <div className="mt-10">
        {loading? (
          <div className="flex  justify-center items-center">
            <Loader />
          </div>
        ):(
          <div>
            {text && (
              <h2 className='text-[gray] text-xl mb-3'>
                Showing results for <span className='text-[black]'>{text}</span>
              </h2>
            )}
            <div className="grid lg:grid-cols-4 sm:grid-cols-3 xm:grid-cols-2">

            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default Home
