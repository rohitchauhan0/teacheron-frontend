"use client"
import React from 'react'
import Navbar from './_common_comp/Navbar'
import Hero from './_components/hero'

import SubjectLinks from './_components/subject_links'
import Footer from './_common_comp/Footer'


const Page = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <SubjectLinks />
      <Footer />
    </div>
  )
}

export default Page