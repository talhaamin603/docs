import React, { useRef } from 'react'
 import Card from './Card'
 
const Foreground = () => {
    const ref=useRef(null);
    const data=[
        {
         desc:"this is the background color of card that will be displyed",
         filesize:".9mb",
         close:true,
         tag:{ isOpen:true,tagTitle:"Download Now",tagcolor:"blue"},
        },
         {
         desc:"this is the background color of card that will be displyed",
         filesize:".9mb",
         close:true,
         tag:{ isOpen:false,tagTitle:"Download Now",tagcolor:"blue"},
        },
         {
         desc:"this is the background color of card that will be displyed",
         filesize:".9mb",
         close:true,
         tag:{ isOpen:true,tagTitle:"Download Now",tagcolor:"green"},
        },

    ]
  return (
     <div ref={ref} className='fixed top-0 left-0 z-[3] w-full h-full flex gap-5 flex-wrap p-10 '>
       {data.map((item,index)=>(
            <Card data={item} reference={ref}/>
        ))
       }
       
     </div>
  )
}

export default Foreground
