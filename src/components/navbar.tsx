import React from 'react'
import Image from 'next/image'
 

function navbar() {
  return (
    <div>
      <section className='flex justify-between'>
        <div>
            <Image className='m-5 p-3'
            src={'/next.svg'}
             alt='logo'
             width={100}
             height={100}/>
        </div>
        <section className=' flex'>
          <button className='m-5 p-3 bg-cyan-500 border rounded-3xl text-white hover:border-cyan-950 '> About us </button>
          <button className='m-5 p-3 bg-cyan-500 border rounded-3xl text-white hover:border-rose-800'> About us </button>
          <button className='m-5 p-3 bg-cyan-500 border rounded-3xl text-white hover:border-cyan-950'> About us </button>
          <button className='m-5 p-3 bg-cyan-500 border rounded-3xl text-white hover:border-cyan-950'> About us </button> 
        </section>
      </section>
    </div>
  )
}

export default navbar
