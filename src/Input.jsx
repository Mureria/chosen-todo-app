import React from 'react'



const Input = () => {
  return (
    <>
        <form>
            <div className='flex items-center gap-4 my-4'>
                <div className='basis-[90%]'>
                    <input type="text" name="" id="" placeholder='Add Todo' className='w-full py-2 px-4 text-sm md:text-base' />
                </div>
                <div className='basis-[20%]'>
                    <button className='w-full border px-4 py-2 text-sm md:text-base'>Add</button>
                </div>
            </div>
        </form>
        
    </>
  )
}

export default Input