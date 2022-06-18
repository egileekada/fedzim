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
                <div className=' lg:absolute z-20 w-72 lg:mt-0 mt-10 lg:px-0  text-[#333] text-sm -bottom-28 lg:w-full flex flex-col lg:mr-72  ' >
                    <div className=' flex lg:ml-auto' >
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M16 2.66675C10.84 2.66675 6.66663 6.84008 6.66663 12.0001C6.66663 19.0001 16 29.3334 16 29.3334C16 29.3334 25.3333 19.0001 25.3333 12.0001C25.3333 6.84008 21.16 2.66675 16 2.66675ZM16 15.3334C14.16 15.3334 12.6666 13.8401 12.6666 12.0001C12.6666 10.1601 14.16 8.66675 16 8.66675C17.84 8.66675 19.3333 10.1601 19.3333 12.0001C19.3333 13.8401 17.84 15.3334 16 15.3334Z" fill="#959AA3"/>
                                <mask id="mask0_5_1230" maskUnits="userSpaceOnUse" x="6" y="2" width="20" height="28">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M16 2.66675C10.84 2.66675 6.66663 6.84008 6.66663 12.0001C6.66663 19.0001 16 29.3334 16 29.3334C16 29.3334 25.3333 19.0001 25.3333 12.0001C25.3333 6.84008 21.16 2.66675 16 2.66675ZM16 15.3334C14.16 15.3334 12.6666 13.8401 12.6666 12.0001C12.6666 10.1601 14.16 8.66675 16 8.66675C17.84 8.66675 19.3333 10.1601 19.3333 12.0001C19.3333 13.8401 17.84 15.3334 16 15.3334Z" fill="white"/>
                            </mask>
                            <g mask="url(#mask0_5_1230)">
                            </g>
                        </svg>
                        <p className=' font-OpenSans-Regular w-72 ml-3' >Plot 4 & 5, Trans Amadi Industrial Layout, Port Harcout</p>
                    </div>
                    <div className=' flex items-center my-4 lg:ml-auto' >
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M11.4189 15.3572C12.7789 18.03 14.97 20.2117 17.6428 21.5811L19.7206 19.5033C19.9756 19.2483 20.3533 19.1633 20.6839 19.2767C21.7417 19.6261 22.8844 19.815 24.0556 19.815C24.575 19.815 25 20.24 25 20.7594V24.0556C25 24.575 24.575 25 24.0556 25C15.1872 25 8 17.8128 8 8.94444C8 8.425 8.425 8 8.94444 8H12.25C12.7694 8 13.1944 8.425 13.1944 8.94444C13.1944 10.125 13.3833 11.2583 13.7328 12.3161C13.8367 12.6467 13.7611 13.015 13.4967 13.2794L11.4189 15.3572Z" fill="#959AA3"/>
                            <mask id="mask0_5_1233" maskUnits="userSpaceOnUse" x="8" y="8" width="17" height="17">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M11.4189 15.3572C12.7789 18.03 14.97 20.2117 17.6428 21.5811L19.7206 19.5033C19.9756 19.2483 20.3533 19.1633 20.6839 19.2767C21.7417 19.6261 22.8844 19.815 24.0556 19.815C24.575 19.815 25 20.24 25 20.7594V24.0556C25 24.575 24.575 25 24.0556 25C15.1872 25 8 17.8128 8 8.94444C8 8.425 8.425 8 8.94444 8H12.25C12.7694 8 13.1944 8.425 13.1944 8.94444C13.1944 10.125 13.3833 11.2583 13.7328 12.3161C13.8367 12.6467 13.7611 13.015 13.4967 13.2794L11.4189 15.3572Z" fill="white"/>
                            </mask>
                            <g mask="url(#mask0_5_1233)">
                            </g>
                        </svg>
                        <a href="https://wa.me/+2348752914133"><p className=' font-OpenSans-Regular w-72 ml-3' >+234-875-291-4133</p></a>
                    </div>
                    <div className=' flex items-center lg:ml-auto' >
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M5.33329 5.33325C3.86663 5.33325 2.67996 6.53325 2.67996 7.99992L2.66663 23.9999C2.66663 25.4666 3.86663 26.6666 5.33329 26.6666H26.6666C28.1333 26.6666 29.3333 25.4666 29.3333 23.9999V7.99992C29.3333 6.53325 28.1333 5.33325 26.6666 5.33325H5.33329ZM16 17.3333L5.33329 10.6666V7.99992L16 14.6666L26.6666 7.99992V10.6666L16 17.3333Z" fill="#959AA3"/>
                            <mask id="mask0_5_1236" maskUnits="userSpaceOnUse" x="2" y="5" width="28" height="22">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M5.33329 5.33325C3.86663 5.33325 2.67996 6.53325 2.67996 7.99992L2.66663 23.9999C2.66663 25.4666 3.86663 26.6666 5.33329 26.6666H26.6666C28.1333 26.6666 29.3333 25.4666 29.3333 23.9999V7.99992C29.3333 6.53325 28.1333 5.33325 26.6666 5.33325H5.33329ZM16 17.3333L5.33329 10.6666V7.99992L16 14.6666L26.6666 7.99992V10.6666L16 17.3333Z" fill="white"/>
                            </mask>
                            <g mask="url(#mask0_5_1236)">
                            </g>
                        </svg>
                        <a href="mailto:info@fedzim.com"><p className=' font-OpenSans-Regular w-72 ml-3' >info@fedzim.com</p></a>
                    </div>
                </div>
            </div> 
            <div className='w-full' >
                <Footer />
            </div>
        </div>
    )
} 