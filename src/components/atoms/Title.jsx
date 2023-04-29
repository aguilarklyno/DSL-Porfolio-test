import React from 'react'

const Title = ({ title }) => {
  return (
    <div className='w-full mt-8 mb-4 py-2 text-xl md:text-2xl lg:text-3xl font-semibold border-b-2 border-white'>
      {title}
    </div>
  )
}

export default Title