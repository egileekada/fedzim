import React from 'react'
import { useNavigate } from 'react-router-dom'
import FooterTop from '../../assets/images/topfooter.png'

export default function ContactSection() {

    const navigate = useNavigate() 

    return (
        <div className=' bg-[#E834D5] lg:h-56 px-6 lg:px-0 relative w-full flex flex-col lg:flex-row lg:items-center py-12 lg:-mb-36 lg:rounded-md  ' >
            <p className=' text-white relative z-30 font-PublicSans-Medium lg:w-3/6 leading-tight text-2xl lg:text-4xl lg:pl-20' >Are you Ready to Make a great Product?</p>
            <a href='/aboutus' className='lg:ml-auto ' ><button className='flex items-center w-40 lg:w-auto text-sm bg-[#230B6D] mt-16 lg:mt-0 text-white rounded lg:ml-auto lg:mr-14 h-10 font-PublicSans-Bold px-6 ' >Contact Us
                <svg className='ml-3' width="24" height="13" viewBox="0 0 24 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M23.725 5.7579C23.7247 5.75758 23.7245 5.75722 23.7242 5.7569L18.8256 0.305287C18.4586 -0.103112 17.865 -0.101593 17.4997 0.308851C17.1344 0.719243 17.1359 1.38303 17.5028 1.79148L20.7918 5.45161H0.9375C0.419719 5.45161 0 5.92098 0 6.5C0 7.07902 0.419719 7.54839 0.9375 7.54839H20.7917L17.5029 11.2085C17.1359 11.617 17.1345 12.2808 17.4997 12.6911C17.865 13.1016 18.4587 13.1031 18.8256 12.6947L23.7242 7.2431C23.7245 7.24278 23.7247 7.24242 23.7251 7.2421C24.0922 6.83229 24.0911 6.16635 23.725 5.7579Z" fill="white"/>
                </svg>
            </button></a>
            <img src={FooterTop} className=' absolute w-full hidden lg:flex h-28 bottom-0 rounded-b-md '  alt='' />
        </div>
    ) 
}
