import React from 'react'
import {AiOutlineEdit, AiFillDelete} from 'react-icons/ai'
const List = () =>{
  return (
    <>
        <div className='flex items-center px-4 py-2 bg-green-600 mb-1'>
            <div className='basis-[90%]'>
                <h2 className='text-sm md:text-base '>Wash Vehicle</h2>
            </div>
            <div className='flex gap-2'>
                <div className='px-2 text-lg text-black/70'>
                    <AiOutlineEdit/>
                </div>
                <div className=' px-2 text-lg text-red-600'>
                    <AiFillDelete/>
                </div>
            </div>
        </div>

        
    </>
  )
}

export default List