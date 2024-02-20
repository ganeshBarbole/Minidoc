import React from 'react'
import { IoMdDownload } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
import { CiCreditCard1 } from "react-icons/ci";
import { motion } from "framer-motion"


const Card = ({cards,reference}) => {
  return (
    <motion.div drag dragConstraints={reference} whileDrag={{ scale: 1.2 }} dragTransition={{ bounceStiffness: 600, bounceDamping: 10 }}
    className='relative h-[18vw] w-[14vw] bg-slate-950 rounded-xl lg:py-10 md:py-5 px-5 overflow-hidden'>
      <div className='text-white mb-2 '>
        <div className='overflow-hidden mb-1'>
        {cards.closetag ? (<IoMdClose/>) : (<CiCreditCard1/>)}</div>
      <p className='text-white m-1 sm:text-xs lg:text-sm'>{cards.text}</p>
      </div>
      <div className='absolute bottom-0 w-full left-0 text-center'>
        <div className='flex justify-between items-center px-2 py-1 sm:text-xs lg:text-sm'>
          <h4 className='text-white'>{cards.size}</h4>
          <span className='lg:h-5 lg:w-5 rounded-full bg-slate-100 flex items-center justify-center md:h-2 md:w-2'><IoMdDownload/></span>
        </div>
        {cards.download && <div className='w-full bg-slate-700 lg:py-2 md:py-1'>Download now</div>}
      </div>
    </motion.div>
  )
}

export default Card