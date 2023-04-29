import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Member({ data }) {
  return (
    <div className='w-full flex flex-row-reverse flex-wrap-reverse justify-center items-center'>
      {data.map((content) => {
        return (
          <div className="w-2/5 h-40 sm:h-48 md:h-56 lg:h-64 m-2 sm:m-4 flex flex-col justify-around items-center" key={content.id}>
            <Link
              className="relative w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48"
              href={`/portfolio/${content.id}`}
            >
              <Image
                src={content.image.url}
                className="rounded-full border-2 border-white "
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
            </Link>
            <p className="text-[0.6rem] py-1">
              {content.nameJa}
            </p>
            <p className='text-[0.6rem] '>
              {content.nameEn}
            </p>
          </div>
        )
      })}
    </div>
  )
}
