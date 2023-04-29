import Image from 'next/image'
import React from 'react'

export default function Products({ products }) {
  return (
    <div className="w-full flex flex-row flex-wrap justify-center items-center space-x-[10%]">
      {products.map((product) => (
        <div key={product.id} className="w-[45%]">
          <div className="w-full h-[100px] sm:h-[125px] md:h-[150px] lg:h-[175px] overflow-hidden bg-center ">
            <div className='relative bg-cover w-full h-full'>
              <Image
                src={product.image.url}
                alt=""
                contain
                cover
                fill
                sizes="100vw"
                className='object-contain'
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
