import React from 'react'
import FifthSection from './sections/FifthSection'
import Footer from './sections/Footer'
import FourthSection from './sections/FourthSection'
import HeroSection from './sections/HeroSection'
import Navbar from './sections/Navbar'
import SecondSection from './sections/SecondSection'
import ThirdSection from './sections/ThirdSection'

export default function HomeScreen() {
    return (
        <div className=' w-auto h-full bg-white overflow-hidden' > 
            <div >
                <HeroSection />
            </div> 
            <div className='w-full bg-white' >
                <SecondSection />
            </div>
            <div className='w-full bg-white' >
                <ThirdSection />
            </div>
            <div className='w-full bg-white' >
                <FourthSection />
            </div>
            <div className='w-full bg-white' >
                <FifthSection />
            </div>
            <div className='w-full bg-white' >
                <Footer contact={true} />
            </div>
        </div>
    )
} 