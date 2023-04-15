import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Member({ data }) {
  return (
    <div className='w-2/5'>
      {data.map((content) => {
        return (
          <div className="w-full flex flex-col justify-center items-center" key={content.id}>
            <Link
              className=""
              href={`/portfolio/${content.id}`}
            >
              <Image
                src={content.image.url}
                className="rounded-full border-2 border-white"
                alt=""
                width={100}
                height={100}
                sizes="100vw"
                style={{
                  maxWidth: '250px',
                  width: '100%',
                  height: 'auto',
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
