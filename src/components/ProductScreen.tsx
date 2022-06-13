import React from 'react'
import { IoIosArrowUp } from 'react-icons/io'
import FirstSection from './ProductComponent/FirstSection'
import SecondSection from './ProductComponent/SecondSection'
import ThirdSection from './ProductComponent/ThirdSection'
import Footer from './sections/Footer'

export default function ProductScreen() {

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
        <div className=' w-auto h-full bg-white overflow-hidden pt-12' >
            <div className='w-full flex justify-center items-center flex-col lg:px-0 px-6 ' >
                <p className=' text-[#333] font-OpenSans-SemiBold text-3xl lg:text-4xl ' >What Patient Memo do</p>
                <p className=' text-[#666] font-PublicSans-Medium text-sm lg:w-96 mt-2 text-center' >Keeping detailed information about a patient, their condition, and their treatment to ensure you have all of the information needed to hand at every checkup or consultation with them.</p>
            </div>
            <div className='w-full' >
                <FirstSection />
            </div>
            <div className='w-full' >
                <SecondSection />
            </div>
            <div style={{display: showScroll ? 'flex' : 'none'}} className='rounded-full'>
                <button  onClick={scrollTop} className=' w-16 h-16 fixed flex justify-center items-center text-white lg:bottom-24 lg:right-24  z-50 bg-[#E834D5] right-8 bottom-10  rounded-full' >
                    <IoIosArrowUp className='w-8 h-8'  />
                </button>
            </div> 
            <div  className='w-full bg-gradient-to-r from-[#FFFFFF] to-[#F5F6F8] ' >
                <ThirdSection /> 
                <div className='w-full' >
                    <Footer contact={true} />
                </div>
            </div>
        </div>
    )
} 