import React from 'react'

const Title = ({ title }) => {
  return (
    <div className='w-full mt-12 py-2 text-xl md:text-2xl lg:text-3xl font-semibold'>
      {title}
    </div>
  )
}

export default Title