import React from 'react'

function Navbar() {
  return (
   <div className='flex p-6 place-content-center'>
    <div className='flex px-6'>Home</div>
    <div className='flex px-6'>Chat</div>
    <img className='align-middle'
      src="/bb_logo.png"
      width={100}
      height={100}
      alt="Picture of the author"
    />
    <div className='flex px-6'>About us</div>
    <div className='flex px-6'>Support Us</div>
   </div>
  )
}

export default Navbar
