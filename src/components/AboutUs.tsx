import React from 'react'
import FirstSection from './AboutUsComponent/FirstSection'
import SecondSection from './AboutUsComponent/SecondSection'
import ThirdSection from './AboutUsComponent/ThirdSection'
import ContactSection from './sections/ContactSection'
import Curves from '../assets/images/Curves.png'
import FifthSection from './sections/FifthSection'
import Footer from './sections/Footer'
import FourthSection from './AboutUsComponent/FourthSection'

export default function AboutUs() {
    return (
        <div className='w-auto h-full bg-white overflow-hidden' >
            <FirstSection />
            <div className=' w-full lg:px-20 mt-20' > 
                <SecondSection />
            </div>
            <div className=' w-full my-6' > 
                <ThirdSection />
            </div>
            <div className='relative' > 
                <img src={Curves} className=' lg:flex hidden -mb-40' alt='curve' />
                <div className='w-auto' > 
                    <ContactSection />
                </div>
            </div>
            <div className='w-full mt-40 bg-white'>
                <FourthSection />
            </div>
            <div className='w-full bg-white' >
                <FifthSection />
            </div>
            <div className='w-full bg-white' >
                <Footer />
            </div>
        </div>
    )
} 