import Image from 'next/image'
import React from 'react'

export default function Profile({ data }) {
  return (
    <div className='flex felx-col justify-center items-center'>
      <h1 className='' >
        {data.nameJaLast}{data.nameJaFirst}
      </h1>
    </div>
  )
}
