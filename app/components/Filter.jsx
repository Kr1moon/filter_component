'use client'
import React, { useState } from 'react'
import Data from '../constants/Data'
import { Card } from './Card'
import Buttons from './Buttons'

const Filter = () => {
    const [item, setItems] = useState(Data)
    const menuItems = [...new Set(Data.map((val) => val.category))]
    const filterItems = (cat) => {
        const newItems = Data.filter((newval) => newval.category === cat)
        setItems(newItems)
    }
  return (
    <div className='w-full mx-auto p-10 flex justify-center items-center flex-col gap-y-10'>
        <div> 
        <h1 className='text-4xl text-white'> 
        Filter
        </h1>
        </div>
        <div className='flex flex-row gap-5 text-white text-xl'> 
        <Buttons
        menuItems={menuItems}
            type='button'
            title='Lunch'
            variant='bg-black hover:bg-white hover:text-black'
            className='cursor-pointer'
            setItems={setItems}
            filterItems={filterItems}
        />

<Buttons
          menuItems={menuItems}   
          type='button'
            title='Dinner'
            variant='bg-black hover:bg-white hover:text-black'
            className='cursor-pointer'
            filterItems={filterItems}
            setItems={setItems}
                   
        />

        </div>
        <Card item={item}/>
    </div>
  )
}

export default Filter