import React, { useRef } from 'react'
import Card from './Card';

const Foreground = () => {
  const ref = useRef(null)
  const cards = [ 
   {text : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, facilis?'
    ,size:'10mb',download:true,closetag:true},
    {text : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, facilis?'
    ,size:'5mb',download:false,closetag:true},
    {text : ' Voluptatem rerum at fugiaemo tempora perspiciatis esse beatae aperiam ducimus, totam eos magni eius deleniti?'
    ,size:'8mb',download:true,closetag:false}  
  ]
  return (
    <div ref={ref} className='w-full h-full z-[3] fixed top-0 left-0 p-10 flex gap-8'>
        {cards.map((item,index)=>(<Card cards={item} key={index} reference={ref}/>))}
    </div>
  )
}

export default Foreground;