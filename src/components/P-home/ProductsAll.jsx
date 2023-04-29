import Image from 'next/image'
import React from 'react'

export default function ProductsAll({ products }) {
  const textSize = "py-1 text-[0.6rem] sm:text-[0.8rem] md:text-[1rem]"
  const textSizeSM = "text-[0.5rem] sm:text-[0.6rem] md:text-[0.7rem]"
  

  return (
    <div className="w-full flex flex-row flex-wrap justify-around items-start">
      {products.map((product) => (
        <div key={product.id} className="w-[46%] mx-[1%]">
          <div className="flex flex-col py-2 my-2 w-full h-fit bg-white/20 rounded-xl">
            <div className="relative w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 m-auto">
              <Image
                src={product.image.url}
                className="border-2 border-white rounded-xl"
                alt=""
                fill
                contain
                sizes="100vw"
                style={{
                  maxWidth: '250px',
                  maxHeight: '250px',
                  width: '100%',
                  height: '100%',
                }}
              />
            </div>
            <div className='text-center flex flex-col h-full w-[90%] m-auto'>
              <p className={`${textSize}`}>{product.name}</p>
              <p className={`${textSizeSM}`}>{product.caption}</p>
              <p className={`${textSizeSM}`}>{product.maker}</p>
              <p className={`${textSizeSM}`}>{product.link}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
