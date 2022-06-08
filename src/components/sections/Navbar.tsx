import React from 'react'
import Logo from '../../assets/images/logo.png'

export default function Navbar() {
    return (
        <div className='w-full flex items-center px-8 lg:px-24 h-24 text-[#575757] ' >
            <img src={Logo} className='w-28' alt='logo' />
            <div className=' w-auto items-center lg:flex hidden ml-auto' >
                <a href='#' className=' text-sm mx-4 font-OpenSans-Medium ' >Home</a>
                <a href='/aboutus' className=' text-sm mx-4 font-OpenSans-Medium ' >About us</a>
                <a href='/product' className=' text-sm mx-4 font-OpenSans-Medium ' >Products</a>
                <a href='/contactus' className=' text-sm mx-4 font-OpenSans-Medium ' >Contact</a>
                <button className=' border mx-4 border-[#E834D5] font-OpenSans-SemiBold text-[#E834D5] text-sm h-10 w-24 rounded ' >LET’S TALK</button>
            </div>
        </div>
    )
} 