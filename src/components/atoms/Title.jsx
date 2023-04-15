import React from 'react'

const Title = ({ title }) => {
  return (
    <div className='w-full py-2 text-xl md:text-2xl lg:text-3xl font-semibold'>
      {title}
    </div>
  )
}

export default Title