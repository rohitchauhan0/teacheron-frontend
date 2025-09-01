"use client"
import { subjects } from '@/data/subjectData'
import React from 'react'


const SubjectLinks = () => {
  return (
    <div className=' max-w-screen-lg mx-auto flex flex-col space-y-5 py-7'>
      <h2 className='text-3xl font-bold text-center'>Top subjects and skills</h2>
      <div className="grid lg:grid-cols-4 grid-cols-2 gap-2 px-2 ">
        {subjects.map((subject, i) => (
          <div key={i} className=" text-blue-500 transition">
            {subject}
          </div>
        ))}
      </div>
    </div>

  )
}

export default SubjectLinks