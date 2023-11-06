import Image from 'next/image'
import React, { useState} from 'react'
import Data from '../constants/Data'
export const Card = () => {
  const [item, setItem] = useState(Data)
  return (
    <div className='w-full justify-center flex items-center p-2 mx-auto flex-col'>
    <div className='flex flex-row justify-center items-center flex-wrap'> 
    {item.map((val) => (
        <div
        key={val.id}
        className='p-5 flex flex-col mx-auto justify-center items-center'
        > 
        <div className='flex flex-center items-center p-10'> 
        <Image 
            src={val.image}
            alt='White'
            width={320}
            height={330}
        />
        </div>
        <div className='flex flex-row gap-2'>
        <p className='text-xl text-white'> 
        {val.title}
        </p> 
        <span className='text-xl text-white text-bold'> 
        {val.price}
        </span> 
        </div>
        <div className=''> 
        {val.desc}
        </div>
        
        </div>
    ))}
    </div>
    </div>
  )
}
