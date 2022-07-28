import React from 'react'
import { IoIosArrowUp } from 'react-icons/io'
import FifthSection from './sections/FifthSection'
import Footer from './sections/Footer'
import FourthSection from './sections/FourthSection'
import HeroSection from './sections/HeroSection' 
import SecondSection from './sections/SecondSection'
import ThirdSection from './sections/ThirdSection'

export default function HomeScreen() { 

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
        <div className=' w-full h-full bg-white overflow-hidden' > 
            <div >
                <HeroSection />
            </div> 
            <div className='w-full bg-white' >
                <SecondSection />
            </div>
            <div className='w-full bg-white' >
                <ThirdSection />
            </div>
            <div id='video' className='w-full bg-white' >
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
                <Footer contact={true} />
            </div>
        </div>
    )
} 