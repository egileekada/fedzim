import React from 'react'
import FirstSection from './AboutUsComponent/FirstSection'
import SecondSection from './AboutUsComponent/SecondSection'
import ThirdSection from './AboutUsComponent/ThirdSection'
import ContactSection from './sections/ContactSection'
import Curves from '../assets/images/Curves.png'
import FifthSection from './sections/FifthSection'
import Footer from './sections/Footer'
import FourthSection from './AboutUsComponent/FourthSection'
import { IoIosArrowUp } from 'react-icons/io'

export default function AboutUs() {

    const [showScroll, setShowScroll] = React.useState(false)
  
    const checkScrollTop = () => {
        if (!showScroll && window.pageYOffset > 400){
            setShowScroll(true)
        } else if (showScroll && window.pageYOffset <= 400){
            setShowScroll(false)
        }
    };

    const scrollTop = () =>{
        window.scrollTo({top: 0, behavior: 'smooth'});
    };
    if (typeof window !== "undefined") {
        window.addEventListener('scroll', checkScrollTop)
    }

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
            <div style={{display: showScroll ? 'flex' : 'none'}} className='rounded-full'>
                <button  onClick={scrollTop} className=' w-16 h-16 fixed flex justify-center items-center text-white lg:bottom-24 lg:right-24  z-50 bg-[#E834D5] right-8 bottom-10  rounded-full' >
                    <IoIosArrowUp className='w-8 h-8'  />
                </button>
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