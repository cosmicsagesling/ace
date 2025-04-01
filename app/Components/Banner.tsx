import React from 'react'
import Marquee from 'react-fast-marquee'

const Banner = () => {
  return (
    <article className='w-full bg-[#0F2A09] text-white px-4 py-4 gap-4'>
      <div className='md:hidden flex items-center justify-between'>
        <div className="max-md:w-[60%]">
          <Marquee speed={40} gradient={false}>
            <span>🎉</span>&nbsp;<span><b>Exclusive Offer!</b></span>&nbsp;<span>First 10 Students gets</span>&nbsp;<span><b>FREE</b></span>&nbsp;<span>ITELS & PTE Consultancy +</span>&nbsp;<span><b>Bonus Perks!</b></span>&nbsp;<span>🚀</span>
          </Marquee>
        </div>
        <a href='/register-now' className='px-6 py-2 bg-white rounded-full text-black text-sm font-semibold'>Claim Now</a>
      </div>
      
      <div className='max-md:hidden flex items-center justify-center gap-4'>
        <p>🎉 <b>Exclusive Offer!</b> First 10 Students gets <b>FREE</b> ITELS & PTE Consultancy + <b>Bonus Perks!</b> 🚀</p>
        <a href='/register-now' className='bg-white text-black rounded-full px-5 py-2 cursor-pointer'>Claim Now!</a>
      </div>
    </article>
  )
}

export default Banner