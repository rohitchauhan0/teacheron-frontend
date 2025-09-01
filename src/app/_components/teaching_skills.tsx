import React from 'react'

const TeachingSkills = () => {
  return (
    <div className=' py-20'>
        <div className=' max-w-screen-xl mx-auto flex items-center justify-center flex-col space-y-3'>
            <h2 className='text-7xl font-bold text-center'>High Quality Teachers</h2>
            <p className='text-xl text-center text-gray-400'>Only <span className='font-bold text-blue-500'>55.1%</span> of teachers that apply make through our application process</p>
        </div>

        <div className=' w-full mt-10 bg-gradient-to-r from-gray-400 via-gray-500 to-gray-600 py-10 '>
            <div className='flex items-center justify-between max-w-screen-md mx-auto'>
            <div className=' flex flex-col space-y-4 items-center'>
                <h2 className=' text-3xl font-semibold text-white'>9500+</h2>
                <p className=' text-xl text-white'>Subjects</p>
            </div>

            <div className=' flex flex-col space-y-4 items-center'>
                <h2 className=' text-3xl font-semibold text-white'>1500+</h2>
                <p className=' text-xl text-white'>Skills</p>
            </div>

            <div className=' flex flex-col space-y-4 items-center'>
                <h2 className=' text-3xl font-semibold text-white'>1000+</h2>
                <p className=' text-xl text-white'>Languages</p>
            </div>
            </div>
        </div>
    </div>
  )
}

export default TeachingSkills