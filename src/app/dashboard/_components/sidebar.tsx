'use client'
import {  LogOutIcon } from 'lucide-react'

import React, { useEffect, useState } from 'react'

import { useRouter, usePathname } from 'next/navigation';

import Link from 'next/link'
import { SIDEBAR_TABS } from '@/app/utils/sidebar_links';



const Sidebar = () => {
    const router = useRouter()
    const pathname = usePathname() as string




    return (
        <>
            <div className='w-[350px] bg-white  h-screen   overflow-y-auto px-8 py-10'>
                <div className="w-full space-y-4 ">
                    { SIDEBAR_TABS.map((tabItem, index) => {
                        const Icon = tabItem.icon;

                        return (
                            <Link
                                href={tabItem.href}
                                key={index}
                                className={` hover:bg-gray-400 hover:text-white hover:rounded-lg hover:py-2 hover:scale-105 transition-all duration-200 flex items-center space-x-5 ${pathname === tabItem.href ? "bg-gray-400 shadow-lg text-white p-2 rounded-lg" : " p-2"}`}
                                onClick={() => router.push(tabItem.href)}
                            >
                                <Icon className="text-xl" />
                                <p className="font-medium">{tabItem.name}</p>
                            </Link>
                        );
                    })}
                    <button
                        
                        className={` w-full cursor-pointer hover:bg-gray-400 hover:text-white hover:rounded-lg hover:py-2 hover:scale-105 transition-all duration-200 flex items-center space-x-5 p-2`}
                    
                    >
                        <LogOutIcon className="text-xl" />
                        <p className="font-medium">Logout</p>
                    </button>

                </div>
            </div>



        </>
    )
}

export default Sidebar