import React, {useState} from 'react'



const Input = () => {
        const [value, setValue] = useState("");
    
        const handleSubmit = e => {
            e.preventDefault();
            if (!value) return;
            
            addTask(value);
            setValue("");
        }
    

  return (
    <>
        <form onSubmit={handleSubmit}>
            <div className='flex items-center gap-4 my-4'>
                <div className='basis-[90%]'>
                    <input value={value} type="text" name="" id="" placeholder='Add Todo'
                     onChange={e => setValue(e.target.value)} className='w-full py-2 px-4 text-sm md:text-base'
                    />
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