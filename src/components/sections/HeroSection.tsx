import React from 'react'
import HeroImage from '../../assets/images/heroimage.png'
import iconPlayvideo from '../../assets/images/iconPlayvideo.png'
import logitech from '../../assets/images/logitech.png'
import google from '../../assets/images/google.png'
import monnify from '../../assets/images/monnify.png' 
import paystack from '../../assets/images/paystack.png'
import investa from '../../assets/images/investa.png'
import flutterwave from '../../assets/images/flutterwave.png'

export default function HeroSection() {
    return (
        <div className='w-screen' > 
            <div className='w-screen relative text-[#230B6D] overflow-x-hidden px-6 lg:px-20 py-16 grid grid-cols-1 lg:grid-cols-2 gap-y-12 gapx-x-4 ' >
                <div className='w-full py-4 flex flex-col items-left justify-center' >
                    <p className='font-PublicSans-Medium text-sm flex items-center' ><div style={{height: '1px'}} className=' w-20 bg-[#230B6D] ' />Your healthcare solutions partner</p>
                    <p className=' font-OpenSans-ExtraBold text-4xl lg:text-5xl leading-snug my-2' >Enabling Digital Revolution For your Businesses</p>
                    <p className='font-PublicSans-Medium text-sm mt-5'>We make medical care more accessible to you</p>
                    <div className=' w-full flex items-center mt-14' >
                        <a href='/contactus' className='flex items-center text-sm bg-[#E834D5] text-white rounded h-10 font-PublicSans-Bold px-6 ' >GET STARTED
                            <svg className=' ml-1 lg:ml-3' width="24" height="13" viewBox="0 0 24 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M23.725 5.7579C23.7247 5.75758 23.7245 5.75722 23.7242 5.7569L18.8256 0.305287C18.4586 -0.103112 17.865 -0.101593 17.4997 0.308851C17.1344 0.719243 17.1359 1.38303 17.5028 1.79148L20.7918 5.45161H0.9375C0.419719 5.45161 0 5.92098 0 6.5C0 7.07902 0.419719 7.54839 0.9375 7.54839H20.7917L17.5029 11.2085C17.1359 11.617 17.1345 12.2808 17.4997 12.6911C17.865 13.1016 18.4587 13.1031 18.8256 12.6947L23.7242 7.2431C23.7245 7.24278 23.7247 7.24242 23.7251 7.2421C24.0922 6.83229 24.0911 6.16635 23.725 5.7579Z" fill="white"/>
                            </svg>
                        </a>
                        <a href='#video' className='bg-transparent font-PublicSans-Bold ml-1 lg:ml-6 flex items-center text-[#575757] ' >
                            <img src={iconPlayvideo} className='h-10 mr-3' alt='iconPlayvideo' />
                            How we work
                        </a> 
                    </div>
                </div> 
                <div className=' w-full flex items-center justify-center' > 
                    <img src={HeroImage} className=' w-3/5' alt='hero' />
                </div> 
            </div>
            <div className='w-full justify-center flex mb-8 flex-col items-center ' > 
                <p className='font-PublicSans-Medium text-sm lg:w-80 flex items-center' ><div style={{height: '1px'}} className=' w-20 bg-[#230B6D] mr-3 ' />Our Clients</p>
                <p className=' font-PublicSans-SemiBold text-2xl lg:w-80 mt-3' >We make medical care more accessible to you</p>
                <p className=' font-PublicSans-Medium text-xs mt-4 lg:w-80 text-[#575757] ' >At Fedzim, this is the creative team that comes up with new ideas. To your business, we offer the best.</p>
            </div>
        </div>
    )
} 