import React from 'react'
import HeroImage from '../../assets/images/AboutImage.png'

export default function FirstSection() {
    return (
    <div className='mt-10 grid grid-cols-1 lg:grid-cols-2 px-6 lg:px-20 gap-6' > 
        <div className='w-full flex flex-col items-center justify-center '  >
            <p className=' font-PublicSans-Bold text-2xl lg:text-4xl lg:w-96 leading-tight ' >We like to find simple solutions to complex challenges.</p> 
            <p className=' font-PublicSans-Regular text-sm mt-6 lg:w-96 ' >Fedzim identifies problems in every industry and proposes solutions. Over time, health systems have managed health records manually via paper files, generating stress and, in some cases, file loss. As a result, Fedzim developed the Patient Memo, which aids in the digital management of medical records.</p>
        </div>
        <div className=' w-full relative ' > 
            <div className=' absolute inset-0 bg-black opacity-60 rounded-lg' />
            <img src={HeroImage} className=' w-full rounded-lg' alt='hero' />
        </div>
    </div>
    )
} 