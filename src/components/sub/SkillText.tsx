"use client"
import React from 'react'
import {motion} from 'framer-motion'
import { slideInFromLeft, slideInFromRight } from '@/utils/motion'


const SkillText = () => {
  return (
    <div className='w-full h-auto flex flex-col items-center justify-center'>

    <motion.div
    variants={slideInFromLeft(0.5)}
    className='text-[30px] text-white font-medium mt-[10px] text-center mb-[15px]'
    >
        Creando aplicaciones con tecnologías modernas
    </motion.div>
    <motion.div
    variants={slideInFromRight(0.5)}
    className='cursive text-[20px] text-gray-200 mb-10 mt-[10px] text-center'
    >
        Nunca pierdas una tarea, plazo o idea
    </motion.div>
</div>
  )
}

export default SkillText