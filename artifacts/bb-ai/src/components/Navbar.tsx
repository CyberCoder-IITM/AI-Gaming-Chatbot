import React from 'react'

function Navbar() {
  return (
   <nav className='flex flex-wrap items-center justify-center gap-6 px-6 py-6 text-sm sm:text-base'>
    <a href='#home' className='hover:text-[#8D16A6]'>Home</a>
    <a href='#chat' className='hover:text-[#8D16A6]'>Chat</a>
    <img className='align-middle'
      src="/bb_logo.png"
      width={100}
      height={100}
      alt="BB AI logo"
    />
    <a href='#about' className='hover:text-[#8D16A6]'>About us</a>
    <a href='#support' className='hover:text-[#8D16A6]'>Support Us</a>
   </nav>
  )
}

export default Navbar
