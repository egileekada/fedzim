import React from 'react'
import HeroImage from '../../assets/images/signin.png'
import Admin from '../../assets/images/admin.png'

export default function ThirdSection() {
    return (
        <div className=' w-full px-24 grid grid-cols-2 gap-y-16 gap-6 py-14' >
            <div className=' w-full flex items-center justify-center' > 
                <img src={HeroImage} className=' w-full' alt='hero' />
            </div> 
            <div className=' w-96 mx-auto flex flex-col justify-center ' >
                <p className=' font-PublicSans-SemiBold text-2xl ' >Your hospital management at the tips</p>
                <p className=' font-PublicSans-Regular text-sm my-6' >The world will be a better place if we keep records and pay close attention to our physical and environmental health. </p>
                <button className=' w-32 text-sm font-OpenSans-Bold mt-4 py-3 bg-[#1B034B] rounded-md text-[#FBFBFC]' >Get Demo</button>
            </div> 
            <div className=' w-96 mx-auto flex flex-col justify-center ' >
                <p className=' font-PublicSans-SemiBold text-2xl ' >We love experience & creative works.</p>
                <p className=' font-PublicSans-Regular text-sm my-6' >The world will be a better place if we keep records and pay close attention to our physical and environmental health. </p> 
                <p className=' font-PublicSans-Medium text-xl ' >Patient Memo</p>
                <p className=' font-PublicSans-Regular text-xs my-6' >Patient Memo helps to keep a healthy and responsive health system in place. Patients Memo enables your hospital in keeping accurate digital records of your patients and allows you to update and reach  them in minutes</p>
            </div>
            <div className=' w-full flex items-center justify-center' > 
                <img src={Admin} className=' w-full' alt='hero' />
            </div> 
        </div>
    )
} 