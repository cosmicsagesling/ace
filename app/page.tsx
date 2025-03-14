import React from 'react'
import { Figtree } from 'next/font/google'
import AvatarGroup from './Components/small/AvatarGroup'

const figtree = Figtree(
  {
    subsets:['latin']
  }
)

const page = () => {
  return (
    <main>
      <section className='overflow-hidden relative h-screen flex flex-col gap-4 items-center justify-center w-full bg-gradient-to-t from-green-200 via-white to-white '>
        <AvatarGroup/>
        <div className='flex flex-col gap-2'>
        <h1 className={` ${figtree.className} text-center font-semibold text-5xl text-black `}>Unlocking Global Opportunities with A.C.E <br /> -  Your Partner in Success</h1>
        <p className='text-gray-500 text-center'>Dive into the world of unlocking the global opportunities <br />
        the second line of the desc goes here</p>

        </div>
        <a className='cursor-pointer bg-black text-white px-8 py-2 rounded-full font-semibold hover:translate-y-1 transition-all hover:bg-gray-700'>Get Started</a>
        <div>
          <img src="/dot.svg" alt="" className='absolute top-20 right-44 size-15' />
          <img src="/dot.svg" alt="" className='absolute bottom-48 left-44 size-15' />
        </div>
        <div>
          <img src="/bg-arrow.svg" alt="" className='absolute top-0 right-0 h-full w-fit' />
        </div>
      </section>

      <section className='h-[80dvh] bg-transparent'>

      </section>
    </main>
  )
}

export default page
