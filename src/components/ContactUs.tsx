import React from 'react'
import HeroImage from '../assets/images/Map.png'
import Footer from './sections/Footer'

export default function ContactUs() {
    return (
        <div className='w-auto overflow-hidden' > 
            <div className=' w-full relative px-6 lg:px-32 py-14 flex lg:flex-row flex-col items-center justify-center' > 
                <img src={HeroImage} className=' w-full' alt='hero' />
                <div className=' lg:absolute lg:mt-0 mt-8 lg:p-10 left-48 -bottom-48 z-20 rounded-lg bg-white ' >
                    <p className=' font-PublicSans-SemiBold text-4xl text-[#333] ' >Let’s Talk</p>
                    <p className=' font-PublicSans-Regular lg:w-80 text-sm text-[#666] mt-2 ' >Our friendly custom service team always respond to enquiries within 24 hours.</p>
                    <div className=' w-full lg:w-auto flex lg:flex-row flex-col mt-8' >
                        <input placeholder='First name' className=' bg-[#F5F6F8] h-11 px-4 text-sm rounded-md font-PublicSans-Regular lg:w-64 lg:mr-2 '  />
                        <input placeholder='Last name' className=' bg-[#F5F6F8] h-11 px-4 text-sm rounded-md font-PublicSans-Regular lg:w-64 lg:mt-0 mt-4 lg:ml-2 '  />
                    </div> 
                    <input placeholder='Email address' className=' bg-[#F5F6F8] h-11 px-4 text-sm rounded-md font-PublicSans-Regular w-full mt-4 mr-2 '  />
                    <input placeholder='No. Handphone' className=' bg-[#F5F6F8] h-11 px-4 text-sm rounded-md font-PublicSans-Regular w-full mt-4 mr-2 '  />
                    <div className=' w-auto' >
                        <textarea placeholder='Message' className=' bg-[#F5F6F8] h-32 p-4  text-sm rounded-md font-PublicSans-Regular w-full mt-4 mr-2 '  />
                    </div>
                    <button className=' font-OpenSans-SemiBold text-sm w-36 py-2 mt-6 rounded-md text-white bg-[#E834D5] ' >Send</button>
                </div>
            </div> 
            <div className='w-full' >
                <Footer />
            </div>
        </div>
    )
} 