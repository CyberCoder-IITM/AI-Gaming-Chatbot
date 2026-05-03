import React from 'react'

function Hero() {
  return (<section id='home' className='px-6 pb-12 pt-8 text-center sm:pb-20'>
    <div className='mx-auto max-w-5xl'>
      <div className='text-5xl font-semibold text-[#8D16A6] drop-shadow-md sm:text-7xl lg:text-9xl'>You Ask We Answer</div>
      <div className='mt-8 flex justify-center'>
        <button id='chat' className='rounded-full bg-[#01FFFC] px-6 py-3 text-black transition hover:scale-105'>Get Started ➡️</button>
      </div>
    </div>
    </section>
  )
}

export default Hero
