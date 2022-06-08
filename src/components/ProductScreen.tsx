import React from 'react'
import FirstSection from './ProductComponent/FirstSection'
import SecondSection from './ProductComponent/SecondSection'
import ThirdSection from './ProductComponent/ThirdSection'
import Footer from './sections/Footer'

export default function ProductScreen() {
    return (
        <div className=' w-auto h-full bg-white overflow-hidden pt-12' >
            <div className='w-full flex justify-center items-center flex-col' >
                <p className=' text-[#333] font-OpenSans-SemiBold text-4xl ' >What Patient Memo do</p>
                <p className=' text-[#666] font-PublicSans-Medium text-sm w-96 mt-2 text-center' >Keeping detailed information about a patient, their condition, and their treatment to ensure you have all of the information needed to hand at every checkup or consultation with them.</p>
            </div>
            <div className='w-full' >
                <FirstSection />
            </div>
            <div className='w-full' >
                <SecondSection />
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