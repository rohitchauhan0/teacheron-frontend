'use client'
import { useStep } from '@/context/step_context';
import React, { useState } from 'react'

const Step1 = () => {
    const [isActive, setisActive] = useState(false)
    const {nextStep} = useStep();

  return (
    <div className='flex flex-col gap-4 max-w-xl mx-auto'>
        <select name="" id="" className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 min-w-96 ' onChange={(e) => setisActive(true)}>
            <option value="individual-teacher">Individual teacher</option>
            <option value="organization">Organization</option>
        </select>

        {
            isActive && (
                <div onClick={()=>{
                    nextStep()
                }} className='bg-green-500 px-4 py-2 w-fit text-white rounded-md cursor-pointer mx-auto'>
                    Next
                </div>
            )
        }
    </div>
  )
}

export default Step1