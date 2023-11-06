import React from 'react'
import Data from '../constants/Data'
const Buttons = ({ type, title, variant, filterItems, setItems, menuItems}) => {
    
  return (
    <button
    type={type}
     className={`rounded-full px-5 py-2 border-white border-[1px] ${variant}`}     
     >
     {menuItems?.map(val => (
      <label
      key={val}
       className='cursor-pointer' 
         onClick={() => filterItems(val)}
      >{val}</label>
     ))}
     
    </button>
  )
}

export default Buttons