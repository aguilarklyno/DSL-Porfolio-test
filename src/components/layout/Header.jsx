import Image from 'next/image'
import React from 'react'

const Header = () => {
  return (
    <div className="fixed w-full flex justify-center items-center backdrop-blur-sm">
      <Image
        src="/logo.png"
        alt=""
        width={70}
        height={70}
        className=""
        sizes="100vw"
        style={{
          maxWidth: '80px',
          width: '20%',
          height: 'auto',
        }}
      />
      <p className='text-2xl'>
        DSL Portfolio
      </p>
    </div>
  )
}

export default Header
